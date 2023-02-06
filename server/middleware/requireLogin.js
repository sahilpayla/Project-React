const jwt = require('jsonwebtoken')
const jwtSecret = 'user'
const mongoose = require('mongoose');
const User = require('../models/user.js')



module.exports = (req, res, next) => {
   const { authorization } = req.headers
   if (!authorization) {
      return res.status(401).json({ error: "You Must Be Logged In" });
   }
   const token = authorization.replace("Bearer ", "")

   jwt.verify(token, jwtSecret, (error, payload) => {
      if (error) {
         return res.status(401).json({ error: "You Must Be Logged In" })
      }

      const { _id } = payload
      User.findById(_id).then(userdata => {
         req.user = userdata
         next();
      })
   })
}