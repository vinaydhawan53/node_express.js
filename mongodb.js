const express=require('express');
// const users=require('./MOCK_DATA.json');
const mongoose=require('mongoose');
const fs=require('fs');
const { type } = require('os');
 const app=express();
 const port=3500;
 //connection

 
 const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required: true,

    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    JobTitle:{
        type:String,
    },

 });
 const users1=mongoose.model("users1",userSchema);

 //api/users is used only for clarification purpose.it can show api data.
 app.use(express.urlencoded({extended: false}));

 app.get('/api/users',(req,res)=>{
   return res.json(users1)
 })
 app.get('/users',async(req,res)=>{
    const allDBusers=await users1.find({});
   const html=`<ul>${allDBusers.map((user)=>
`<li>${user.firstName}-${user.email}
</li>` )}</ul>`
   res.send(html)
 })
 app.get("/api/users/:id",(req,res)=>{
   const id=Number(req.params.id);
   const user=users.find((user)=>user.id===id);
   return res.json(user)
 })
 app.post("/api/users",async(req,res)=>{
  const body=req.body;
  if(
    // !body||
    !body.first_name||
    !body.last_Name||
    !body.email||
    !body.JobTitle
  ){
//   users.push(body)
//   fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{

    return res.status(400).json({msg:"All fields are req..."});

  }
  const result=await users1.create({
    firstName:body.first_name,
    lastName:body.last_Name,
    email:body.email,
    JobTitle:body.JobTitle
  });
  return res.status(201).json({msg:'sucess'})
  })

//  });
 app.listen(port,()=>{
    console.log("server started");  
 })