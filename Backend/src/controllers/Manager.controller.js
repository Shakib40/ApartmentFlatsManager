const express = require("express");

const Manager = require("../models/Manager.model");

const router = express.Router();

//--------------------------USER CRUD ------------------------------

router.post("", async (req, res) => {
  try {
    const user = await Manager.create(req.body);

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const users = await Manager.find().lean().exec();

    return res.send({ users });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;
