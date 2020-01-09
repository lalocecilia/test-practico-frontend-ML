const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
global.rootRequire = name => require(path.join(__dirname, '/' + name));

// view engine setup
const viewEngine = exphbs({
  extname: '.html',
  partialsDir: path.join(__dirname, './views'),
  defaultLayout: 'layout',
});

app.set('views', path.join(__dirname, './views'));
app.engine('.html', viewEngine);
app.set('view engine', '.html');


require('./routes')(app);

module.exports = app;
