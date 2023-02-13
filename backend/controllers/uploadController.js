const uploadController = require('express').Router();
const multer = require('multer');
const { verifyToken } = require('../middlewares/verifyToken.js');
const secret = "jwtSecret"


const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, 'public/images')
   },
   filename: (req, file, cb) => {
      cb(null, req.body.filename)
   }
})

const upload = multer({
   storage: storage
})


// upload controller
uploadController.post('/image', verifyToken, upload.single('image'), (req, res)=> {
   try{
      return res.status(201).json({msg: "Successfully uploaded"})
      console.log(error.message)
   }
   catch(error){
      return res.status(500).json(error.message)
      console.log(error.message)
   }
})


module.exports = uploadController