const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "dennis",
  password: "Ella@2017",
  database: "weather",
  port:3036
});

module.exports = {pool};
