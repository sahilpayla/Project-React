import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Fooddetails from './components/Fooddetails/Fooddetails';
import Foodcatalog from './components/Foodcatalog/Foodcatalog';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Create from './components/Create/Create';
import { useEffect } from 'react';

function App() {

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/create' element={<Create />} />
        <Route path='/food/:id' element={<Fooddetails />} />
        <Route path='/foods/:id' element={<Foodcatalog />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
