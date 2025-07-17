const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
  console.log('Connected to the PostgreSQL database');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};


// -- Create database
// CREATE DATABASE donuts_db;

// -- Switch to database (if using psql)
// \c donuts_db;


// -- Create ENUM for user roles
// CREATE TYPE user_role AS ENUM ('buyer', 'seller');

// -- USERS Table
// CREATE TABLE users (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE,
//   password TEXT NOT NULL,
//   role user_role NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- PRODUCTS Table
// CREATE TABLE products (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   description TEXT,
//   price NUMERIC(10,2) NOT NULL,
//   image_url TEXT,
//   seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- CART_ITEMS Table
// CREATE TABLE cart_items (
//   id SERIAL PRIMARY KEY,
//   buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
//   quantity INTEGER NOT NULL CHECK (quantity > 0),
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   UNIQUE (buyer_id, product_id)
// );

// -- ORDERS Table
// CREATE TABLE orders (
//   id SERIAL PRIMARY KEY,
//   buyer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
//   total NUMERIC(10,2) NOT NULL,
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );

// -- ORDER_ITEMS Table
// CREATE TABLE order_items (
//   id SERIAL PRIMARY KEY,
//   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
//   product_id INTEGER REFERENCES products(id),
//   quantity INTEGER NOT NULL,
//   price NUMERIC(10,2) NOT NULL
// );