import todoModel from './../models/todo_model.js';

const addTodo = async (req, res) => {
    try {
        const { chore } = req.body;

        const todo = new todoModel({
            chore
        })
        const result = await todo.save();
        res.status(201).send(result);
    } catch(err) {
        console.log(err);
        res.status(500).send(err)
    } 
}

const getTodos = async(req, res) => {
    try {
        const todos = await todoModel.find();

        if(todos) {
            res.status(200).send(todos);
        } else {
            res.status(404).send('data not found')
        }

    } catch(err) {
        //console.log(err)
        //res.status(500).json({ msg: err.message})
        res.status(500).json({ msg: "Oops error happened", err: err});
        //res.status(500).json({ msg: "Internal Server Error", error: error})
        next(err)
    }
}

const updateTodo = async(req, res) => {
    const { id } = req.params;

    try{
        const todoUpdate = await todoModel.findOne({_id: id});
        const updated = await todoModel.findByIdAndUpdate({ _id: id }, { completed: !todoUpdate.completed}, { returnDocument: 'after'});
        res.status(200).send(updated);
    } catch(err) {
        console.log(err)
    }
}
 
const deleteTodo = async(req, res) => {
    const { id } = req.params;

    try {
        const todo = await todoModel.findByIdAndDelete({_id: id});
        console.log(todo);
        res.status(200).json({msg: "Deleted Sucessfully"});
    } catch(err) {
        console.log(err);
    }
 }

    export default {
        addTodo,
        getTodos, 
        updateTodo,
        deleteTodo
    }