import React from 'react'
import data from '../consoledata'

const Game = ({ game }) => {
   return (
      <>
         <h1>{game.name}</h1>
         <img src={game.image} className="img-fluid" alt="" 
         style={{ height: "450px", width: "350px" }} />
      </>
   )
}

export default Game