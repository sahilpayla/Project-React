const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = require('../models/post.js')

router.post('/createpost', requireLogin, (req, res)=>{
   const {title, body} = req.body;
   if(!title || !body){
      return res.status(422).json({error :  "Please Add All The Fields"});
   }
   console.log(req.user)
   res.send("OK")
   const post = new Post ({
      title, 
      body,
      postedBy :req.user
   })

   post.save()
   .then(result=>{
      res.json({post:result})
   })
   .catch(error=>{
      console.log(error)
   })
})


module.exports = router;