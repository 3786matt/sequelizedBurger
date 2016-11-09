var express = require('express');
var router = express.Router();
var burger1 = require('../models/burger.js');


router.get('/', function (req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  burger1.selectAll(function(data) {
    var burgerObj = {burgers: data};
    console.log(burgerObj);
    res.render('index', burgerObj);
  });
});

router.post('/burgers/create', function(req, res){
  console.log('is it what i think is:', req.body); // {burger_name: "ChiliCheese#"}
  req.body.devoured = 0; // {burger_name: "ChilliCheese#", devoured:0}
  // this is a dirty fix, the mysql column should have a default of 0
  burger1.insertOne(req.body, function(otherRes){
    console.log('mysql returned', otherRes);
    res.redirect('/burgers');
    //might need to use /index
  });
});

router.put('/burger/update:id', function(req, res){
  var condition = req.params.id;
  console.log('Condition: ', condition);
  burger1.updateOne(req.params.id, function(){
    res.redirect('/burgers');
  });
});

module.exports = router;