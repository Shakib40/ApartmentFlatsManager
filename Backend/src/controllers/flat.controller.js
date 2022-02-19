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
    const products = await Flat.find().lean().exec();
    const resultPerPage = 24;
    const productsCount = await Flat.countDocuments();

    // return res.send({ flats });
    return res.status(200).json({
      products,
      productsCount,
      resultPerPage,
    });
    
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});


module.exports = router;
