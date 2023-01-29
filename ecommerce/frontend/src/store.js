import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllGamesReducers } from './reducers/gameReducers';
import { cartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
   getAllGamesReducers: getAllGamesReducers,
   cartReducer: cartReducer
})


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItem')) : []


const initialState = {
   cartReducer: {
      cartItems: cartItems
   }
}


const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store;