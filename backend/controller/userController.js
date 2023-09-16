import asyncHandler from "express-async-handler";
// @desc   Auth user/set token
// route POST/api/users/auth
// @access public

// the asynchandler helps us to use async await without having to use try and catch
const authUser = asyncHandler(async(req, res) => {
  res.status(200).json({message: "Auth user"});
})

export {
    authUser
}