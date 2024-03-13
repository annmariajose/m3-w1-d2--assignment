const express = require('express');
const routes = require('./routes/index');
const exp = require('constants');

const app = express();
app.use('/', routes);

module.exports = app;