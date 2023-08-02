// require the mongoose libreary to be loaded 
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://0.0.0.0/todo_db');

// acquire the connection (to check if connectin is successful)
const db= mongoose.connection;

// error
db.on('error',console.error.bind(console,'Error in connecting to database'));

//printing msg if connection is established
db.once('open', function(){
    console.log('Successfully connected to database');
})

