'use strict';
// require('dotenv').load();

const cors = require ('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const debug = require('debug' ,'finance:server');

const app = express();

mongoose.connect('mongodb://localhost/dev');
mongoose.Promise = require('bluebird');
app.use(cors());
app.use(morgan('dev'));

let db = mongoose();
let passport = passport();

//required files
app.use(require('./config/passport'));


const server = app.listen(PORT, () => {
  console.log('server up on PORT:', PORT);
});

module.exports = app;

server.isRunning = true;
module.exports = server;
