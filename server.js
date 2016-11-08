var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars'); 
app.engine('handlebars', exphbs(
{
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// app.get('/', function(req,res){
//   connection.query('SELECT * FROM burgers;', function(err, data){
//     if(err) throw err;

//     res.render('index', {burgers: data});
//   });
// });

// app.post('/create', function(req,res){
//   connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.section], function(err, result){
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

var port = 8080;
app.listen(port);


