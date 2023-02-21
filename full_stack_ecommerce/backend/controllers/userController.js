
const ErrorHandler = require('../utils/errorHandler.js')
const catchAsyncError = require('../middlewares/catchAsyncError.js');
const User = require('../models/userModel.js');
const sentToken = require('../utils/jwtToken.js');


// REGISTER USER
exports.registerUser = catchAsyncError(async (req, res, next) => {
   const { name, email, password, } = req.body
   const user = await User.create({
      name, email, password,
      avatar: {
         public_id: "this is sample id",
         url: "profilePicUrl"
      }
   });

   sentToken(user, 201, res);
})


// LOGIN USER 
exports.loginUser = catchAsyncError(async (req, res, next) => {
   const { email, password, } = req.body
   if (!email || !password) {
      return next(new ErrorHandler("plese enter email and password", 400))
   }

   const user = await User.findOne({ email: email }).select("+password");
   if (!user) {
      return next(new ErrorHandler("Invalid email or password", 401))
   }

   const isPasswordMatched =await user.comparePassword(password);
   if (!isPasswordMatched) {
      return next(new ErrorHandler("Invalid email or password", 401))
   }

   sentToken(user, 200, res);
}) 