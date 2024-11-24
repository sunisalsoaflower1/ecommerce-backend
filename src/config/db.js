const mysql = require('mysql2/promise');
require('dotenv').config(); // To load environment variables from .env file

// Create a pool of connections to the database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'app_user',
    password: 'Openupplz@24',
    database: 'ecommerce',
});

module.exports = pool;


module.exports = pool; // Export the pool for use in other parts of the app

