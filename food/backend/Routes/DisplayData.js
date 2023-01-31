const express = require('express');
const router = express.Router();


router.post('/phonedata', (req, res) => {
   try {
      res.send([global.Iphone_Macs, global.Product_Category])
   }
   catch (error) {
      console.log(error.message)
      res.status(500).json({ failed: true });
   }
})


module.exports = router;