const express = require("express");

const managerController = require("./controllers/Manager.controller");
const flatController = require("./controllers/flat.controller");
const app = express();

app.use(express.json());

app.use("/manager",managerController);
app.use("/flat",flatController);
module.exports = app;

