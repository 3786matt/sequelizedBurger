
var orm = require('../config/orm.js');

var burger = {
  selectAll: function (cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function(id, callback) {
    orm.updateOne(id, function (res) {
      callback(res);
    });
  },
};

module.exports = burger;