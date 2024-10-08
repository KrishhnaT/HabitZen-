var http = require("http");
var express = require('express');
var path = require('path');
var fs = require("fs");
var url = require("url");
var mongoose = require("mongoose")
// import mongoose from "mongoose";

var app = express();
app.use(express.static(path.join(__dirname + "/public")));
app.get('/', (req, res) => {
    res.send('Hello World!')
})
mongoose.connect("mongodb://localhost:27017/database").then(() =>{
    console.log("db connected")
})
const myServer = http.createServer(app);

myServer.listen(8000,()=> console.log('server started'))

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model("users", userSchema)

app.get("/getUsers", async(req,res) =>{
    const userData = await UserModel.find();
    res.json(userData)
});



module.exports = app;
