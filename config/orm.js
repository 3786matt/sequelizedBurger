var connection = require('../config/connection.js');

var orm = {
  selectAll: function(callback){
    connection.query('SELECT * FROM burgers', function(err, res){
      if(err) throw err;
      callback(res);
    });
  },

  insertOne: function(insertOne, callback){
    connection.query('INSERT INTO burgers SET ?', {burger_name : insertOne}, function(err, res){
      if(err) throw err;
      callback();

    });
  },

  updateOne: function(id, callback){
    connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [true, id], function(err, res){
      if(err) throw err;
      callback();
    })
  }
};

module.exports = orm;