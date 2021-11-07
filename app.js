'use strict';

const express        = require('express');
const expressLayouts = require('express-ejs-layouts');
const path           = require('path');
const cookieParser   = require('cookie-parser');
const logger         = require('morgan');

const app = express();

const {
  init
} = require('./middlewares/init');
// Third party package load to view
app.use('/assets', express.static(__dirname + '/node_modules'));
app.use('/assets/fas', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));
app.use('/public', express.static(__dirname + '/public'));

// Database connect
const myMongoose = require('./libs/mongoose');
myMongoose.createConnection();

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(init);
app.use('/', require('./config/routes'));

module.exports = app;
