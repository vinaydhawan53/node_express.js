const express=require("express");
const {connectionMongoDb}=require('./connection')
const userRouter=require("./routes/user");
const fs=require("fs");
const app=express()
const port=8000;
connectionMongoDb("mongodb://localhost:27017/youtube-app-1");
app.use(express.urlencoded({extended: false}));
app.use("/user",userRouter)
app.listen(port=>{
    console.log("start");
    
})

