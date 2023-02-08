import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { cartReducer, orderReducer, productReducer } from './reducers';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />}></Route>
          <Route index element={<HomePage />}></Route>
          <Route exact path='cart' element={<CartPage />}></Route>
          <Route exact path='checkout' element={<CheckoutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

