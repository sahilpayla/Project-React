const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = 'user'
const requireLogin = require('../middleware/requireLogin.js')




router.get('/protected', requireLogin, (req, res) => {
   res.send('hello protected')
})

router.post('/signup', (req, res) => {
   const { name, email, password } = req.body;

   if (!email || !password || !name) {
      return res.status(422).json({ error: "All Fields Required" })
   }

   user.findOne({ email: email })
      .then((savedUser) => {
         if (savedUser) {
            return res.status(422).json({ error: "already exist" })
         }

         // use hash
         bcrypt.hash(password, 10)
            .then(hashedpassword => {
               const User = new user({
                  email,
                  password: hashedpassword,
                  name
               })

               User.save()
                  .then(User => {
                     res.json({ message: "saved successfully" })
                  })
                  .catch(err => {
                     console.log(err);
                  })
            })

      })
      .catch(err => {
         console.log(err);
      })
})

router.post('/signin', (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return res.status(422).send({ error: "Please Provide Details" })
   }
   user.findOne({ email: email })
      .then(savedUser => {
         if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or Password" })
         }

         // compare password with saved password in the database
         bcrypt.compare(password, savedUser.password)
            .then(doMatch => {
               if (doMatch) {
                  // res.json({ message: "Successfully Signed In" })
                  const token = jwt.sign({ _id: savedUser._id }, jwtSecret)
                  res.json({ token })
               }
               else {
                  return res.status(422).json({ error: "Invalid Email or Password" })
               }
            })
      })
      .catch(err => {
         console.log(err)
      })


})


module.exports = router;