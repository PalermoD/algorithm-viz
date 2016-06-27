var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();





app.use('/', express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(function(req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    
    res.setHeader('Cache-Control', 'no-cache');
    next();
});





