import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import ProductPage from '../components/ProductPage';
import Footer from '../components/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../actions';

const HomePage = () => {
   const dispatch = useDispatch();
   const products = useSelector(state => state.product.products)
   const cartItems = useSelector(state=>state.cart.items)


   const addToCart = (product) => {
      dispatch({type:ADD_TO_CART, payload: product})
   }



   return (
      <>
         <Navbar cartCount={cartItems.length}/>
         <Slider />
         <ProductPage products={products} addToCart={addToCart}></ProductPage>
         <Footer />
      </>
   );
}

export default HomePage