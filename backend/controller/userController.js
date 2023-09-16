import asyncHandler from "express-async-handler";
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
  res.status(200).json({message: "Register User"});
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