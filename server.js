var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(function(req,res){
  res.sendFile(__dirname + '/index.html');
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.sendStatus(500, {message: err.message});
});

app.listen(3000, function(){
  console.log('server running on 3000');
});
