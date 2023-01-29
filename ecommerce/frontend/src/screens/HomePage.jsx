import React from 'react'
import data from '../consoledata'
import Game from '../components/Game'
import './HomePage.css'
const HomePage = () => {
   return (
      <div>
         <div className="homepage-row">

            {data.map(game => {
               return <div>
                     <Game game={game} />
                  </div>
               {/* </div> */}
            })}

         </div>
      </div>
   )
}

export default HomePage