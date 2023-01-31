const express = require('express');
const router = express.Router();
const User = require('../models/User.js')
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "jwtSecret"


// CREATE USER 

router.post('/createuser',

   // validation by express package
   body('email').isEmail(),
   body('name').isLength({ min: 2 }),
   body('password', 'Incorrect Password').isLength({ min: 4 }),

   async (req, res) => {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      // hashing with bcryptjs
      const salt = await bcrypt.genSalt(10);
      let secPassword = await bcrypt.hash(req.body.password, salt)


      try {
         await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: secPassword
         })
         res.json({ success: true });
      }
      catch (error) {
         console.log(error)
         res.json({ success: false });
      }
   })




// LOGIN USER

router.post('/loginuser',

   //  validations 
   body('email').isEmail(),
   body('password', 'Incorrect Password').isLength({ min: 4 }),
   async (req, res) => {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      let email = req.body.email;

      try {
         let userData = await User.findOne({ email });
         if (!userData) {
            return res.status(400).json({ errors: "Try logging with correct credentials" });
         }

         // comparing with password of db here ----
         const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

         if (!pwdCompare) {
            return res.status(400).json({ errors: "Incorrect Password" });
         }

         const data = {
            user:{
               id:userData.id
            }
         }
         const authToken = jwt.sign(data, jwtSecret)

         return res.status(200).json({ success: true, authToken:authToken });
      }
      catch (error) {
         console.log(error)
         res.status(500).json({ failed: true });
      }
   })

module.exports = router;