const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://shakib40:@cluster0.6zwqr.mongodb.net/fullstackdeveloper");
};
