const express = require('express')

const flatController = require('./controllers/flat.controller');

const app = express();

app.use(express.json());

app.use('/' , flatController)

module.exports = app