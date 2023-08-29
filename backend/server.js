const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const {expressjwt} = require('express-jwt')
const app = express()
require('dotenv').config()

// Parse incoming JSON
app.use(express.json())

// moniter server traffic
app.use(morgan('dev'))

// DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected To Mongo DB'))
    .catch(err => console.log(err))

//Routes
app.use("/api/authenticate", require('./routes/authRouter'))
app.use("/api/authenticate", expressjwt({secret: process.env.SECRET, algorithms:['HS256'] }))
app.use("/api/authenticate/todo", require('./routes/todoRouter'))

//error handling
app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
         res.status(err.status)
    }
    return res.send({errorMessage: err.message })
})

app.listen(9000, () => {
    console.log("Server Up on Port 9000")
})