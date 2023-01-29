import axios from "axios";


export const getAllGames = () => async dispatch => {
   dispatch({type:"GET_GAMES_REQUEST"})

   try {
      const response = await axios.get('/api/games/getAllGame')
      console.log(response)
      dispatch({type:"GET_GAMES_SUCCESS", payload: response.data})
   } 
   catch (error) {
      dispatch({type:"GET_GAMES_FAILED", payload: error})   
   }
}