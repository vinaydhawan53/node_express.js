const mongoose=require('mongoose');
//we can create a model.
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,

    },
    Email:{
        type:String,
        required:true,
        unique:true,

    },
    gender:{
      type:String,
    },
    jobTitle:{
        type:String,
    },
    
},
{timestamps:true}
);
const User=mongoose.model("user",userSchema);
module.exports=User;