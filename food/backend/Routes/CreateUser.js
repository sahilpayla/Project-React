const express = require('express');
const router = express.Router();
const User = require('../models/User.js')
const { body, validationResult } = require('express-validator');


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


      try {
         await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
         })
         res.json({ success: true });
      }
      catch (error) {
         console.log(error)
         res.json({ success: false });
      }
   })



   
// LOGIN USER

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


      try {
         await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
         })
         res.json({ success: true });
      }
      catch (error) {
         console.log(error)
         res.json({ success: false });
      }
   })

module.exports = router;