const db = require('../config/db');

//Create Products
exports.createProduct = async (req, res) => {
  const { name, description, price, image_url } = req.body;
  const sellerId = req.user.userId;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  try {
    const result = await db.query(
      `INSERT INTO products (name, description, price, image_url, seller_id)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, description, price, image_url, sellerId]
    );

    res.status(201).json({ product: result.rows[0] });
  } catch (error) {
    console.error('Create Product Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


//Get Seller Products
exports.getSellerProducts = async (req, res) => {
  const sellerId = req.user.userId;

  try {
    const result = await db.query(
      'SELECT * FROM products WHERE seller_id = $1 ORDER BY created_at DESC',
      [sellerId]
    );
    res.json({ products: result.rows });
  } catch (error) {
    console.error('Get Products Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

//Update Product

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image_url } = req.body;
  const sellerId = req.user.userId;

  try {
    // Make sure product belongs to the seller
    const product = await db.query('SELECT * FROM products WHERE id = $1 AND seller_id = $2', [id, sellerId]);

    if (product.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found or unauthorized' });
    }

    const updated = await db.query(
      `UPDATE products SET name = $1, description = $2, price = $3, image_url = $4
       WHERE id = $5 RETURNING *`,
      [name, description, price, image_url, id]
    );

    res.json({ product: updated.rows[0] });
  } catch (error) {
    console.error('Update Product Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


//Delete Product
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  const sellerId = req.user.userId;

  try {
    const product = await db.query('SELECT * FROM products WHERE id = $1 AND seller_id = $2', [id, sellerId]);

    if (product.rows.length === 0) {
      return res.status(404).json({ message: 'Product not found or unauthorized' });
    }

    await db.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete Product Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



//Get All products
exports.getAllProducts = async (req, res) => {
  try {
    const result = await db.query(
      `SELECT p.*, u.name AS seller_name
       FROM products p
       JOIN users u ON p.seller_id = u.id
       ORDER BY p.created_at DESC`
    );
    res.json({ products: result.rows });
  } catch (error) {
    console.error('Get All Products Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};