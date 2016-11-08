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
  burger1.insertOne(req.body.burger_name, function(){
    res.redirect('/burgers');
    //might need to use /index
  });
});

router.put('/cats/update:id', function(req, res){
  var condition = req.params.id;
  console.log('Condition: ', condition);
  burger1.updateOne(req.params.id, function(){
    res.redirect('/burgers');
  });
});

module.exports = router;