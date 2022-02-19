const express = require("express");

const Flat = require("../models/flat.model");

const router = express.Router();


router.post("", async (req, res) => {
  try {
    const user = await Flat.create(req.body);

    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const flats = await Flat.find().lean().exec();

    return res.send({ flats });
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;
