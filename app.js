var http = require("http");
var express = require('express');
var path = require('path');
var fs = require("fs");
var url = require("url");

var app = express();
app.use(express.static(path.join(__dirname + "/public")));
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const myServer = http.createServer(app);

myServer.listen(8000,()=> console.log('server started'))


module.exports = app;
