const mysql = require("mysql2");

 const conect = mysql.createConnection({
  host: "localhost",
  database: "portafolio",
  user: "root",
  password: "23josesa",
  port: 3306,
});


 module.exports = conect;
