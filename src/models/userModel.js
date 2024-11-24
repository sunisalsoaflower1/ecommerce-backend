const pool = require('../config/db');

exports.createUser = async (username, email, hashedPassword) => {
    const [result] = await pool.query(
        'INSERT INTO Users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword]
    );
    return result.insertId;
};

exports.getUserByEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM Users WHERE email = ?', [email]);
    return rows[0];
};

