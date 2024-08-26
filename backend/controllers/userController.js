const User = require("../models/userModel");
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
   return jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '1d'});
}

const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.status(200).json({email, token, message: 'loggedIn succesfully'});
    } catch(err){
        res.status(400).json({error:err.message});
    }

};

const signUpUser = async (req, res) => {

  const { email, password } = req.body;

 
  try {
    const user = await User.signup(email,password);
    const token = createToken(user._id);
    res.status(200).json({ email, token, message: 'signedup succefully' });
  } catch (err) {
    res.status(400).json({err: err.message});
  }
  
};

module.exports = { loginUser, signUpUser };