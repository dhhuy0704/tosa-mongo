'use strict';

var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var path           = require('path');
var cookieParser   = require('cookie-parser');
var logger         = require('morgan');

var app = express();
// Third party package load to view
app.use('/css/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/public', express.static(__dirname + '/public'));

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./config/routes'));

module.exports = app;
