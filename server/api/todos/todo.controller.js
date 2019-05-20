const Todo = require('../../db/mongo/todoModal');

exports.index = (req, res) => {
        
};

exports.show = (req, res, next) => {
    Todo.find({})
    .exec((err, result)=> {
        if(err) next(err);

        res.json(result);
    })
};

exports.destroy = (req, res) => {
};


exports.insert = (req, res, next) => {
    Todo.insert()
}

exports.create = (req, res, next) => {
    Todo.create(req.body, (err, post)=> {
        if(err) return next(err);

        res.json(post);
    })
};

