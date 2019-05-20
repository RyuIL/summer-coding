const mongoose = require('mongoose')

// const autoIncrement = require('mongoose-auto-increment');

mongoose.set('useCreateIndex', true);

const TodoSchema = new mongoose.Schema({
    "todos" : [{
        "text" : {
            "input" : String,
            "inputContent" : String,
            "date" : {type:Date, default:Date.now},
            "order" : Number
        }
    }]
});


// TodoSchema.plugin(autoIncrement.plugin, 'Todo');


module.exports = mongoose.model('Todo', TodoSchema);