import asyncHandler from "express-async-handler";
import User from "../models/userModels.js"
import generateToken from "../utils/generateToken.js";
// @desc   Auth user/set token
// route POST/api/users/auth
// @access public

// the asynchandler helps us to use async await without having to use try and catch
const authUser = asyncHandler(async(req, res) => {
  res.status(200).json({message: "Auth user"});
});

// @desc register a new user
// route POST/api/users
// @access public
const registerUser = asyncHandler(async(req, res) => {
  const {name, email, password} = req.body;

  const userExists = await User.findOne({email});
  if(userExists){
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    email,
    password
  });
  if(user){
    generateToken(res, user._id)
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  }else{
    res.status(400);
    throw new Error('Invalid User data')
  }
  
});
// @desc logout user
// route POST/api/users/logout
// @access public
const logoutUser = asyncHandler(async(req, res) => {
  res.status(200).json({message: "logout User"});
});
// @desc GET user profile
// route POST/api/users/profile
// @access private
const getUserProfile = asyncHandler(async(req, res) => {
  res.status(200).json({message: "user profile"});
});

// @desc upadte user profile
// route PUT/api/users/profile
// @access private
const updateUserProfile = asyncHandler(async(req, res) => {
  res.status(200).json({message: "update user profile"});
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}