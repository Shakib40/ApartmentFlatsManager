const mongoose = require('mongoose');

// User Schema
const ManagerSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: false },
      gender: { type: String, required: false, default: "Male" },
    },
    {
      versionKey: false,
    }
  );
  
 module.exports = mongoose.model("users", ManagerSchema);