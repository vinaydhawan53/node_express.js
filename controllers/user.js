const User=require('../models/user')
async function handleGetAllUsers(req,res){
    const allDBusers = await User.find({});
    return res.json(allDBusers);
}
async function getUserById(req,res){
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.json(user)
}
async function handleCreateNewUser(req,res){
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

}
module.exports= {
    handleGetAllUsers,
    getUserById,
    handleCreateNewUser,
}