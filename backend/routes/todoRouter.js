const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo')


todoRouter.route("/")
.get((req, res, next) => {

    Todo.find()
        .then(response => res.send(response))
        .catch(error => next(error))
})
.post((req, res, next) => {

     req.body.user = req.auth._id
        // console.log(req.auth._id)
    const newTodo = new Todo(req.body)
    newTodo.save()
        .then(response => res.send(response))
        .catch(error => next(error))
})

todoRouter.route("/user")
.get((req, res, next) => {// works for getting user todos


        Todo.find({user: req.auth._id})// must be an object
            .then(response => res.send(response))
            .catch(error => next(error))
})

todoRouter.route("/:id")
.delete((req, res, next) => {//    delete works
    // const todoId = req.params.id
    // const todoUser = req.auth._id
        Todo.findByIdAndDelete({_id: req.params.id, user: req.auth._id})// I dont know if this will work
            .then(response => res.send(response))
            .catch(error => next(error))
})
.put((req, res, next) => {// how to pass in the update????
    const todoId = req.params.id
    const todoUser = req.auth._id
    const findThese = {
        _id: req.params.id,
        user: req.auth._id
    }
    const update = req.body
        Todo.findByIdAndUpdate(findThese, update)
            .then(response => res.send(response))
            .catch(error => next(error))

})




module.exports = todoRouter