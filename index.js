const express = require('express');
const app = express();
const port = 8001;                      //defining port
const path = require('path');

//requiring the database connection
const db = require('./config/mongoose');


// seting up of view engine
app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('assets'));

//to take the data form the form
app.use(express.urlencoded({extended: false}));

// use of express router
app.use('/',require('./routes/index'));


app.listen(port, function(err){
    if(err) {
        console.log(`Error in running server: ${port}`);
    }
    console.log(`Server is running on port ${port}`);
});

