const express = require('express')
const mongoose = require('mongoose')
const app = express()


mongoose.connect('mongodb://localhost/fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

app.use(express.json())

const flatController = require('./controllers/flat.controller');

app.use('/' , flatController)

app.listen(8080, console.log(`Server is starting at 8080`));

module.exports = app
