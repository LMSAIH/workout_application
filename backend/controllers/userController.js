const User = require('../models/userModel');

const loginUser = async (req,res) =>{
    res.json({message: "login user"});
}

const signUpUser = async (req,res) =>{
    res.json({message: "signing user up"});
}

module.exports = {loginUser, signUpUser}