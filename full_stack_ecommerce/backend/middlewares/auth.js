const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require('jsonwebtoken');
const secretJWT = 'jwt'
const User = require('../models/userModel.js')


exports.isAuthenticatedUser = catchAsyncError(async(req, res, next) =>{
   const {token} = req.cookies;

   if(!token){
      return next(new ErrorHandler("Please Login to access these resource", 401))
   }

   const decodedData  = jwt.verify(token , secretJWT)
   req.user = await User.findById(decodedData.id)

   next();
} )