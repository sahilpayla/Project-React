import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import { useEffect } from 'react';
import { CHANGE_ORDER_CART, CHANGE_QUANTITY } from '../actions';

const HomePage = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items)
   const order = useSelector(state => state.order)

   useEffect(() => {
      dispatch({ type: CHANGE_ORDER_CART, payload: cartItems })
   }, [cartItems])

   const changeQuantity = (quantity, item) => {
      dispatch({ type: CHANGE_QUANTITY, payload:{...item, quantity:quantity} })
   }



   return (
      <>
         <Navbar cartCount={cartItems.length} />
         <Cart items={cartItems} order={order} changeQuantity={changeQuantity} />
         <Footer />
      </>
   );
}

export default HomePage