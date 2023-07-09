
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost:3306',
    user: 'dennis',
    password: 'Ella@2017',
    database: 'weather',
  });
  module.exports = pool;