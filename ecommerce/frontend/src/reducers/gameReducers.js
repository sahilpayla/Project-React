

export const getAllGamesReducers = (state = {games : []}, action) => {
   
   switch (action.type) {
      case 'GET_GAME_REQUEST': return {
         loading: true,
         ...state
      }
      case 'GET_GAME_SUCCESS': return {
         loading: false,
         games: action.payload
      }
      case 'GET_GAME_FAILED': return {
         error: action.payload,
         loading: false
      }
      default: return state;
   }
}