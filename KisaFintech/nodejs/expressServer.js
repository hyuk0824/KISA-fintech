var express = require('express');
var app = express();
var path =require('path');
var request = require('request');
var bodyParser = require('body-parser');

//*******************DB*******************************************
var mysql = require('mysql');
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rla9851518!@',
    database : 'kisafintech'
  });

  connection.connect();
//*************************************************************

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/join', function(req, res){
  res.render('join');
})

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

app.get('/design', function(req, res){
  res.render('designed');
})
app.post('/user', function(req,res){

})
app.post('/userJoin', function(req,res){
  

  var name = req.body.nameajax;
  var phone = req.body.phoneajax;
  var age = req.body.ageajax;
  console.log(name, phone, age);
  connection.query("INSERT INTO user(name, user_id, user_password) values (?, ?, ?)", [name, phone, age],
 function (error, results, fields) {
  if (error) throw error;
  else{
      res.json('DATA INPT');
  }
 
});
})
connection.end();
app.listen(3000);
