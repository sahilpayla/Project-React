const COOKIE_EXPIRES = 5


const sentToken = (user, statusCode, res) => {
   const token = user.getJWTToken();

   // options for cookie
   const options = {
      expires:new Date(
            Date.now() + COOKIE_EXPIRES *24 * 60 * 60 * 1000 
         ),
      httpOnly : true
   }

   res.status(statusCode).cookie('token', token , options).json({
      success: true, token , user
   })
}


module.exports = sentToken;