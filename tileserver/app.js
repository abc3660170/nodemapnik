var express = require('express');
var path = require('path');
var server = require('./server/server.js');

var app = express();
app.all("*",function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow","X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1');
	//res.header("Content-Type","application/json;charset=utf-8");
	next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/t', server);

var server_dark_transparent = require('./server/server_dark_transparent.js');
app.use('/tsdt', server_dark_transparent);

app.get('/', function(req, res){
  res.sendfile('./public/index.html');
});

app.listen(3000);