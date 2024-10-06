const express=require('express')
const url=require('url')
const app=express()
 app.get('/',(req, res) =>{
res.end("This is home page")    
 });
 app.get('/about',(req,res)=>{
    res.end("this is about page")
 });
 app.get("/home",(req,res)=>{
    const myurl=url.parse(req.url,true);
    const username=myurl.query.myname;
    res.end(`hi ${username}`)
 })
 app.listen((2001),() =>{
    console.log("server started"); 
 })
