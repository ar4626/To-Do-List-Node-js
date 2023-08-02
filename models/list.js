const mongoose = require('mongoose');

// creating a schema object
const listSchema = new mongoose.Schema({
    description:{
        type : String,
        required: true
    },
    date:{
        type: String,
        default: Date,
        required: true
    },
    category:{
        type: String,
        required: false
    }
});

const Todolist = mongoose.model('Todolist',listSchema);

module.exports = Todolist;