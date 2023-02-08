import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { } from '../actions';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items)
   const order = useSelector(state => state.order)


   return (
      <>
         <Navbar cartCount={cartItems.length} />
         <Checkout order={order} ></Checkout>
         <Footer />
      </>
   );
}

export default CheckoutPage