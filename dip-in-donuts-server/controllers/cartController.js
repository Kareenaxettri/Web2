const db = require('../config/db');

exports.addToCart = async (req, res) => {
  const buyerId = req.user.userId;
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity || quantity <= 0) {
    return res.status(400).json({ message: 'Product ID and positive quantity required' });
  }

  try {
    // Check if item already in cart
    const existing = await db.query(
      'SELECT * FROM cart_items WHERE buyer_id = $1 AND product_id = $2',
      [buyerId, product_id]
    );

    if (existing.rows.length > 0) {
      // Update quantity
      const updated = await db.query(
        'UPDATE cart_items SET quantity = quantity + $1 WHERE buyer_id = $2 AND product_id = $3 RETURNING *',
        [quantity, buyerId, product_id]
      );
      return res.json({ cartItem: updated.rows[0] });
    }

    // Insert new cart item
    const inserted = await db.query(
      'INSERT INTO cart_items (buyer_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [buyerId, product_id, quantity]
    );

    res.status(201).json({ cartItem: inserted.rows[0] });
  } catch (error) {
    console.error('Add to Cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCartItems = async (req, res) => {
  const buyerId = req.user.userId;

  try {
    const result = await db.query(
      `SELECT ci.id, ci.quantity, p.name, p.price, p.image_url
       FROM cart_items ci
       JOIN products p ON ci.product_id = p.id
       WHERE ci.buyer_id = $1`,
      [buyerId]
    );

    res.json({ cartItems: result.rows });
  } catch (error) {
    console.error('Get Cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateCartItem = async (req, res) => {
  const buyerId = req.user.userId;
  const { id } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity <= 0) {
    return res.status(400).json({ message: 'Positive quantity required' });
  }

  try {
    const item = await db.query(
      'SELECT * FROM cart_items WHERE id = $1 AND buyer_id = $2',
      [id, buyerId]
    );

    if (item.rows.length === 0) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    const updated = await db.query(
      'UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *',
      [quantity, id]
    );

    res.json({ cartItem: updated.rows[0] });
  } catch (error) {
    console.error('Update Cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeCartItem = async (req, res) => {
  const buyerId = req.user.userId;
  const { id } = req.params;

  try {
    const item = await db.query(
      'SELECT * FROM cart_items WHERE id = $1 AND buyer_id = $2',
      [id, buyerId]
    );

    if (item.rows.length === 0) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    await db.query('DELETE FROM cart_items WHERE id = $1', [id]);

    res.json({ message: 'Cart item removed' });
  } catch (error) {
    console.error('Remove Cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};