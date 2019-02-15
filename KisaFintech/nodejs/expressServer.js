var express = require('express');
var app = express();
var path =require('path');
var request = require('request');

//*******************DB*******************************************
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rla9851518!@',
  database : 'kisafintech'
});

connection.connect();

connection.query('select * from user', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
//*************************************************************

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/join', function(req, res){
  res.render('join');
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/ejsTest', function(req,res){
	res.render('index');
})

app.get('/test', function(req, res){
	console.log(req.header);
	res.send('hello2');
});

app.get('/test/request', function(req, res) {
	request('http://www.naver.com', function(error, response, body){
	res.send(body);
	});
});

app.get('/user', function(req, res){
	res.send('<input type="text" name=username> <input type="button" name=userbutton value=button>');
});

app.post('/user', function(req,res){

})
app.post('userJoin', function(req,res){
  var name = req.body.name;
  var phone = req.body.phone;
  var age = req.body.age;

  
})

app.listen(3000);
