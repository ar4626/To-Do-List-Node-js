const Todolist = require('../models/list');

module.exports.home = async function(req, res){
    try{
        const Todo = await Todolist.find({}).exec();
            console.log("Fetching the data from database");
            return res.render('home',{
                title: 'Todo Application',
                todo_list: Todo
            });
    }
    catch(err){
        console.log("Error in fetching the database");
            return;
    }
}

module.exports.addItem = async function(req,res){
    console.log("Adding item to database");
    console.log(req.body);
    try{
        const newItem =await Todolist.create({
            description : req.body.description,
            date : req.body.date,
            category : req.body.category
        });
        // console.log(newItem);
        return res.redirect('back');
    }catch(err){
        console.log(`Error in adding item: ${err}`);
    }
}

module.exports.deleteItem = async function(req,res){
    userid = req.query.id;   ////getting the user id from ui
    user = userid.split(',');
    try{
        console.log(user);
        for (i in user){
            await Todolist.findByIdAndDelete(user[i]).exec();
        }

    console.log(`Successfully deleted`, user);
    return res.redirect('back');
    }
    catch(err){
        console.log(`Error in deleting item: ${err}`);
    } 

}