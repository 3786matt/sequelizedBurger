
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(cb){
      cb(res);
    });
  },
  
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;