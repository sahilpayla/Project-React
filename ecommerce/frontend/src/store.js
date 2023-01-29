import { combineReducers, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getAllGamesReducers } from './reducers/gameReducers';

const finalReducer = combineReducers({
   getAllGamesReducers: getAllGamesReducers
})


const initialState = {}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store;