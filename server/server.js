var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var{Todo} = require('./models/todos');
var{Users} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/createTodo',(req, res)=>{

    var todo = new Todo({
        text:req.body.text,
        completed:req.body.completed
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
       res.status(400).send(e);
    });

});

app.listen(3000,()=> {
console.log('Application Server running on port 3000');
});

