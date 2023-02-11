const authController = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = "jwtSecret"

//register 
authController.post('/register', async (req, res) => {
   try {
      const isExisting = await User.findOne({ email: req.body.email })
      if (isExisting) {
         throw new Error("Already such an account with this email. Try a new one!")
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = await User.create({ ...req.body, password: hashedPassword })
      const { password, ...others } = newUser._doc
      const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, secret, { expiresIn: '5h' })

      return res.status(201).json({ others, token })

   }
   catch (error) {
      return res.status(500).json(error.message)
   }
})

// login
authController.post('/login', async (req, res) => {
   try {
      const user = await User.findOne({ email: req.body.email })
      if (!user) {
         // throw new Error("Email is not Registered")
         return res.status(401).send({ failed: "wrong creditionals" })
      }

      const comparePass = await bcrypt.compare(req.body.password, user.password)
      if (!comparePass) {
         return res.status(401).send({ message: "Wrong creditionals" })
      }
      const { password, ...others } = user._doc
      const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, secret, { expiresIn: '5h' })

      return res.status(200).json({ others, token })

   }
   catch (error) {
      return res.status(500).json(error.message)
      console.log(error.message)
   }
})

module.exports = authController