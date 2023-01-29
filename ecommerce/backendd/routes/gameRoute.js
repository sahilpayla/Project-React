import express from 'express';
const Router = express.Router();
// import router from 'express.Router();'
import Games from '../models/GameModel.js';



Router.get('/getAllGames', async (req, res) => {
   try {
      const games = await Games.find({})
      res.send(games)
   }
   catch (error) {
      res.status(400).json({ message: error.message })
   }
})


// module.exports = router;
export default Router;