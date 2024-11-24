const pool = require('../config/db');

// Get all products
exports.getProducts = async (req, res) => {
    const [products] = await pool.query('SELECT * FROM Products');
    res.json(products);
};

// Add a product
exports.addProduct = async (req, res) => {
    const { name, description, price, category, tags } = req.body;
    await pool.query(
        'INSERT INTO Products (name, description, price, category, tags) VALUES (?, ?, ?, ?, ?)',
        [name, description, price, category, tags]
    );
    res.status(201).json({ message: 'Product added successfully' });
};

