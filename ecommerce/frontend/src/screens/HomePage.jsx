// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllGames } from '../actions/gameActions'
import Game from '../components/Game'
import games from '../consoledata'
import './HomePage.css'


const HomePage = () => {

   // const dispatch = useDispatch();
   // const gamesstate = useSelector((state) => state.getAllGamesReducer)
   // const { games, error, loading } = gamesstate


   // useEffect(() => {
   //    dispatch(getAllGames());

   // }, []);


   return (
      <div >
         <div className="homepage-row">


            {
               games.map(game => {
                  return <div key={game._id}>
                     <Game game={game} />
                  </div>
               })
            }

         </div>
      </div>
   )
}

export default HomePage