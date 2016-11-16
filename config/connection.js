var Sequelize = require("sequelize");


var connection = {

  localhost: {
    host: "localhost",
    user: "root",
    password: "",
    database : "burgers_db"
  }
  //NEED A COMMA AFTER LOCALHOST OBJECT IF USING JAWSDB

  // jawsDB: {

  // }
}

//WILL NEED TO CHANGE CHOOSECONNECTIONSOURCE BELOW TO CONNECTION.JAWSDB

var chooseConnectionSource = connection.localhost;

var sequelize = new Sequelize(chooseConnectionSource.database, chooseConnectionSource.user, chooseConnectionSource.password, {
  host: chooseConnectionSource.host,
  // dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;