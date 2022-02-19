const express = require('express')

const FlatSchema = require('../models/flat.model');

const router = express.Router()

router.get('/flat', async (req, res) => {
  try {
    const product = await FlatSchema.find({});
    return res.status(200).send(product)
  } catch (e) {
    return res.status(500).json({ status: 'Failed', message: e.message })
  }
})

module.exports = router