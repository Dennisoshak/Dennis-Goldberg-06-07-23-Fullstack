const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "weather",
  port: 3036,
});

module.exports = { pool };
