var express = require('express');
var path = require('path');

var app = express();

//Configure App
app.set('port' , (process.env.PORT || 1337));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Use Middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
//define Routes

app.get('/', function(req, res){
  res.render('index');
});

app.listen(app.get('port'), function(){
  console.log("Server started at port", app.get('port'));
});

//End
