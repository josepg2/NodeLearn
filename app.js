var express = require('express');
var path = require('path');

var app = express();

//Configure App

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Use Middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
//define Routes

app.get('/', function(req, res){
  res.render('index');
});

app.listen(1337, function(){
  console.log("Server started at port 1337");
});

//End
