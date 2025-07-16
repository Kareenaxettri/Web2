const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');

const { verifyToken, verifySeller } = require('./middleware/auth');  // <-- Add this

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', verifyToken, verifySeller, userRoutes);  // Protected routes for managing users

app.get('/', (req, res) => {
  res.send('Dip in Donuts API is running 🍩');
});

db.query('SELECT NOW()', [])
  .then(result => console.log('Database time:', result.rows[0]))
  .catch(err => console.error('DB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});