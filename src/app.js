
require('dotenv').config();
const compression = require('compression');
const express = require('express');
const router = require('./routes');
const responseController = require('./controllers/response.controller');
const { default: helmet } = require('helmet')
const morgan = require('morgan')
var bodyParser = require('body-parser')
const app = express();

console.log(`Process::`, process.env);

// init middlewares
app.use(bodyParser.json())
app.use(morgan("dev")) // To show request on console log ("combined", "common", "short", "tiny", "dev")
app.use(helmet()) // Prevent third page read information from our page
app.use(compression()); // Reduce size of input and output data

// init db
require('./dbs/init.mongodb')

app.use('/', router);

// init routes
app.set("view engine","ejs");
app.set("views","./src/views");

app.get('/', responseController.getAll)
app.put('/', responseController.updateOne)
app.post('/', responseController.create)

// handling error

module.exports = app;