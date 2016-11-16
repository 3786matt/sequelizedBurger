var express = require('express');
var router = express.Router();
var sequelBurger1 = require('../models/burger.js');

var connection1 = models.sequelize;
sequelizeConnect.sync();

router.get('/', function (req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
sequelBurger1.burgers.findAll({
  include: [{model: sequelBurger1.burger}]
}).then(function(data){
  var object = {burgers: data};
  res.render('/index', object);
})
});

router.post('/burgers/create', function(req, res){
  sequelBurger1.burgers.create({
    burger_name: req.body.burger_name,
    devoured:false
  }).then(function(){
    res.redirect('/index');
  });
});

//not sure how to devour burger with put below.

router.put('/burgers/update/:id', function(req, res){
  var condition = req.params.id;
  console.log('Condition: ', condition);
  sequelBurger1.updateOne(req.params.id, function(mysqlRes){
    console.log('mysql returned', mysqlRes)
    res.redirect('/burgers');
  });
});

module.exports = router;
