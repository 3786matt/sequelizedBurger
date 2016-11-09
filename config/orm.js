var connection = require('../config/connection.js');

var orm = {
  selectAll: function(callback){
    connection.query('SELECT * FROM burgers', function(err, res){
      if(err) throw err;
      callback(res);
    });
  },

  insert: function(vals, callback){
    connection.query('INSERT INTO burgers SET ?', vals, function(err, res){
      // vals will should look like {newBurgerName: 'ChiliChese', devoured: 0}
      // without devoured it passed {burger_name: 'ChiliCheese2'}
      // INSERT INTO burgers VALUES(burger_name, other_thing ) SET ('ChiliCheese', devoured )
      if(err) throw err;
      callback(res);
    });
  },

  // insertOne: function(table, cols, vals, cb){
  //   var queryString = 'INSERT INTO burgers (burger_name, devoured, date) VALUES ("' + cols + '", false)';
  //   connection.query(queryString, vals, function(err, res){
  //     if(err) throw err;
  //     cb(res);
  //   });
  // },

  updateOne: function(id, callback){
    connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [true, id], function(err, res){
      if(err) throw err;
      callback(res);
    })
  }
};

module.exports = orm;