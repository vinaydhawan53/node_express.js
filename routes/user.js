const express = require("express");
const User = require("../models/user");
const router = express.Router();
const {handleGetAllUsers,getUserById,handleCreateNewUser}=require('../controllers/user')

// router.get("/", handleGetAllUsers);
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)
router.get("/:id",getUserById)
//   router.post("/",handleCreateNewUser)
 
 //  });
 module.exports=router();