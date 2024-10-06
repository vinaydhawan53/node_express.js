const express=require('express');
const users=require('./MOCK_DATA.json');
const fs=require('fs')
 const app=express();
 const port=3000;
 //api/users is used only for clarification purpose.it can show api data.
 app.use(express.urlencoded({extended: false}));
 app.get('/api/users',(req,res)=>{
   return res.json(users)
 })
 app.get('/users',(req,res)=>{
   const html=`<ul>${users.map((user)=>
`<li>${user.first_name}
</li>` )}</ul>`
   res.send(html)
 })
 app.get("/api/users/:id",(req,res)=>{
   const id=Number(req.params.id);
   const user=users.find((user)=>user.id===id);
   return res.json(user)
 })
 app.post("/api/users",(req,res)=>{
  const body=req.body;
  users.push(body)
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{

    return res.json({status:"pending"});
  })
 });
 app.listen(port,()=>{
    console.log("server started");  
 })