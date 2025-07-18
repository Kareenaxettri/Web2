// controllers/orderController.js

const db = require('../config/db');

exports.checkout = async (req, res) => {
  const buyerId = req.user.userId;
  console.log('[DEBUG] Checkout called by buyer ID:', buyerId);

  try {
    console.log('[DEBUG] Fetching cart items...');
    const cartResult = await db.query(
      `SELECT ci.*, p.price FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.buyer_id = $1`,
      [buyerId]
    );

    const cartItems = cartResult.rows;
    console.log('[DEBUG] Cart Items:', cartItems);

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Calculate total
    let total = 0;
    cartItems.forEach(item => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      if (isNaN(price) || isNaN(quantity)) {
        throw new Error(`Invalid price or quantity: ${JSON.stringify(item)}`);
      }

      total += price * quantity;
    });
    console.log('[DEBUG] Total order amount:', total);

    // Start transaction
    await db.query('BEGIN');

    // Create order
    const orderResult = await db.query(
      'INSERT INTO orders (buyer_id, total) VALUES ($1, $2) RETURNING *',
      [buyerId, total]
    );

    const orderId = orderResult.rows[0].id;
    console.log('[DEBUG] Created order with ID:', orderId);

    // Insert order_items
    for (const item of cartItems) {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      console.log(`[DEBUG] Inserting item - product_id: ${item.product_id}, quantity: ${quantity}, price: ${price}`);

      await db.query(
        'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)',
        [orderId, item.product_id, quantity, price]
      );
    }

    // Clear cart
    await db.query('DELETE FROM cart_items WHERE buyer_id = $1', [buyerId]);
    console.log('[DEBUG] Cart cleared');

    // Commit transaction
    await db.query('COMMIT');
    console.log('[DEBUG] Transaction committed successfully');

    res.status(201).json({ message: 'Order placed successfully', order_id: orderId, total });
  } catch (error) {
    await db.query('ROLLBACK');
    console.error('[ERROR] Checkout failed:', error);
    res.status(500).json({ message: 'Checkout failed' });
  }
};

exports.getMyOrders = async (req, res) => {
  const buyerId = req.user.userId;

  try {
    const ordersResult = await db.query(
      'SELECT * FROM orders WHERE buyer_id = $1 ORDER BY created_at DESC',
      [buyerId]
    );

    const orders = ordersResult.rows;

    const detailedOrders = await Promise.all(
      orders.map(async (order) => {
        const itemsResult = await db.query(
          `SELECT oi.quantity, oi.price, p.name, p.image_url
           FROM order_items oi
           JOIN products p ON oi.product_id = p.id
           WHERE oi.order_id = $1`,
          [order.id]
        );

        return {
          id: order.id,
          total: order.total,
          created_at: order.created_at,
          items: itemsResult.rows,
        };
      })
    );

    res.status(200).json({ orders: detailedOrders });
  } catch (error) {
    console.error('[ERROR] Failed to fetch orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT o.id AS order_id, o.buyer_id, u.name AS buyer_name, o.total, o.created_at,
             oi.product_id, p.name AS product_name, oi.quantity, oi.price
      FROM orders o
      JOIN users u ON o.buyer_id = u.id
      JOIN order_items oi ON o.id = oi.order_id
      JOIN products p ON oi.product_id = p.id
      ORDER BY o.created_at DESC
    `);

    const ordersMap = new Map();

    for (const row of result.rows) {
      const {
        order_id,
        buyer_id,
        buyer_name,
        total,
        created_at,
        product_id,
        product_name,
        quantity,
        price
      } = row;

      if (!ordersMap.has(order_id)) {
        ordersMap.set(order_id, {
          order_id,
          buyer_id,
          buyer_name,
          total,
          created_at,
          items: []
        });
      }

      ordersMap.get(order_id).items.push({ product_id, product_name, quantity, price });
    }

    res.status(200).json(Array.from(ordersMap.values()));
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

// Get all orders that include products belonging to the seller (based on seller_id in products)
exports.getOrdersForSeller = async (req, res) => {
  const sellerId = req.user.userId; // seller's user ID from token

  try {
    // Select orders where order items include products from this seller
    const result = await db.query(`
      SELECT
        o.id AS order_id,
        o.buyer_id,
        u.name AS buyer_name,
        o.total,
        o.created_at,
        oi.product_id,
        p.name AS product_name,
        oi.quantity,
        oi.price
      FROM orders o
      JOIN users u ON o.buyer_id = u.id
      JOIN order_items oi ON o.id = oi.order_id
      JOIN products p ON oi.product_id = p.id
      WHERE p.seller_id = $1
      ORDER BY o.created_at DESC
    `, [sellerId]);

    const ordersMap = new Map();

    for (const row of result.rows) {
      const {
        order_id,
        buyer_id,
        buyer_name,
        total,
        created_at,
        product_id,
        product_name,
        quantity,
        price,
      } = row;

      if (!ordersMap.has(order_id)) {
        ordersMap.set(order_id, {
          order_id,
          buyer_id,
          buyer_name,
          total,
          created_at,
          items: [],
        });
      }

      ordersMap.get(order_id).items.push({ product_id, product_name, quantity, price });
    }

    res.status(200).json(Array.from(ordersMap.values()));
  } catch (err) {
    console.error('Error fetching seller orders:', err);
    res.status(500).json({ message: 'Failed to fetch orders for seller' });
  }
};