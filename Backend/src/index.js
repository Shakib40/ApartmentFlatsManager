const express = require("express");

const userController = require("./controllers/Manager.controller");

const app = express();

app.use(express.json());

app.use("/user",userController);

module.exports = app;

