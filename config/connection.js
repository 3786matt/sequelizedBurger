var mysql = require("mysql");

// First you need to create a connection to the db
var connection = mysql.createConnection({
  port: 8080,
  host: "localhost",
  user: "root",
  password: " ",
  database : "burgers_db"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

module.exports = connection;