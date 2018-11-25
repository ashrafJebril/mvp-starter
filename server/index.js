var express = require('express');
var bodyParser = require('body-parser');
var students = require('../database-mongo');
var connect = require ('connect');
// var path=require('path');




var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
app.post('/items' , function(req,res){
	
	var data = req.body ;
	console.log("issa" ,data)
    students.save(data,function(text){
    	
	      students.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
})

})



///////////////////////////////////////////

app.get('/items', function (req, res) {
  students.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(process.env.PORT||3000, function() {
  console.log('listening on port 3000!');
});

