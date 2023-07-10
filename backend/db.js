const mysql = require("mysql");

const pool = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  password: "abc999666",
  database: "weather",
});

module.exports = pool;
