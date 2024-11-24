# E-commerce Backend API

This is a backend application for an e-commerce platform, built with Node.js, Express, and MySQL.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Installation

Follow these steps to install and set up the project:

1. Clone the repository:
   ```bash
   git clone https://github.com/sunisalsoaflower1/ecommerce-backend.git
   cd ecommerce-backend
2.Install the required dependencies:
npm install

3.Make sure MySQL is installed and running on your system.

4.Set up your database and update the configuration:

5.Open src/config/db.js and configure your MySQL connection credentials (e.g., username, password).
Setup

6.Create a new MySQL database:
CREATE DATABASE ecommerce;

7.Update the database credentials in src/config/db.js:
const pool = mysql.createPool({
    host: 'localhost',
    user: 'app_user',  // Use your MySQL username
    password: 'your_app_password',  // Use your MySQL password
    database: 'ecommerce',  // Database name
});
8.Running the Application
To run the application:

Start the MySQL server (if it's not already running):
sudo systemctl start mysql

Start the Node.js application:
npx nodemon src/app.js
The server will now be running at http://localhost:3000.


9. You can test the API using curl or Postman. Here is an example curl command to register a new user:

curl -X POST http://localhost:3000/api/auth/register \
    -H "Content-Type: application/json" \
    -d '{"username": "testuser", "email": "testuser@example.com", "password": "password123"}'
Contributing
If you would like to contribute to this project, please fork the repository and create a pull request with your proposed changes


