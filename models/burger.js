//i can probably just delete orm.js under the config directory
// var orm = require('../config/orm.js');

var Sequelize = require("sequelize");
var dbConnection = require("../config/connection.js");


var seqBurg = dbConnection.define("seqBurgTab", {
  id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
  },

  burger_name: {
        type: Sequelize.STRING
  },

  devoured: {
        type: Sequelize.STRING
  },

  date: {
        type: Sequelize.DATE
  }
});

seqBurg.sync();

module.exports = seqBurg;
