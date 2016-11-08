var express = require('express');
var router = express.Router();
var burger1 = require('../models/burger.js');

app.get('/', function(req,res){
  connection.query('SELECT * FROM burgers;', function(err, data){
    if(err) throw err;

    res.render('index', {burgers: data});
  });
});

app.post('/create', function(req,res){
  connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.section], function(err, result){
    if(err) throw err;
    res.redirect('/');
  });
});

//need another post req to take the above from the table and insert into html element; 

//changes boolean value to devoured to move it to right side.

//