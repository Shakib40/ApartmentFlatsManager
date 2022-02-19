const mongoose = require('mongoose')

const flatSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    gender: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    age: {
        type: Number,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    image: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    flattype: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    block: {
        type: String,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    flatNumber: {
        type: Number,
        required: [true  , "Please Enter product Name"],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})
module.exports = mongoose.model('Flat' , flatSchema);