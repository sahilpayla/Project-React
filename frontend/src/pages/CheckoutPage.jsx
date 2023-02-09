import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ADDRESS } from '../actions';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items)
   const order = useSelector(state => state.order)
   const user = useSelector(state => state.user)

   const addAddress = (address) => {
      dispatch({type:ADD_ADDRESS, payload:address})
   }


   return (
      <>
         <Navbar cartCount={cartItems.length} />
         <Checkout order={order} user={user} addAddress={addAddress}></Checkout>
         <Footer />
      </>
   );
}

export default CheckoutPage