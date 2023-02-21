const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken');
const secretJWT = 'jwt'

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please Enter your name"],
      minLength: [3, "Name Should have more than 2 character" ],
      trim:true
   },
   email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
      validate:[validator.isEmail,"Please enter a valid mail"]
   },
   password: {
      type: String,
      required: [true, "Please Enter Password"],
      minLength: [6, "Password should be greater than 6"],
      select:false
   },
   avatar: {
      public_id: {
         type: String,
         required: true
      },
      url: {
         type: String,
         required: true
      },
   },
   role: {
      type: String,
      default:'user'
   },
   resetPasswordToken : String,
   resetPasswordExpire : Date
})



// BCRYPT
userSchema.pre("save", async function (next){

   if(!this.isModified("password")){
      next();
   }
   this.password = await bcrypt.hash(this.password, 10)
});


// JWT TOKEN
userSchema.methods.getJWTToken = function (){
   return jwt.sign({id:this._id}, secretJWT, {
      expiresIn: 5
   }) 
}


// COMPARE PASSWORD
userSchema.methods.comparePassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = mongoose.model("User", userSchema)