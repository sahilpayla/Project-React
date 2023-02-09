import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_ADDRESS,SET_SHIP_ADDRESS ,PLACE_ORDER, EMPTY_CART} from '../actions';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items)
   const order = useSelector(state => state.order)
   const user = useSelector(state => state.user)

   const addAddress = (address) => {
      dispatch({type:ADD_ADDRESS, payload:address})
   }

   const setShipAddress = (address) => {
      dispatch({type:SET_SHIP_ADDRESS, payload:address})
   }
   const placeOrder = () => {
      if(order.shipping_address){
         dispatch({type:PLACE_ORDER, payload:order})
         dispatch({type:EMPTY_CART})
      }
      else{
         alert('Choose Shipping Address')
      }

   }


   return (
      <>
         <Navbar cartCount={cartItems.length} />
         <Checkout order={order} user={user} addAddress={addAddress} setShipAddress={setShipAddress} placeOrder= {placeOrder}></Checkout>
         <Footer />
      </>
   );
}

export default CheckoutPage