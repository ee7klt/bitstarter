#!/usr/bin/env node
var fs = require('fs');
var infile = "index.html";
var text = fs.readFileSync('index.html','utf8')
console.log("\nRead: " + text + "From: " + infile);





var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
