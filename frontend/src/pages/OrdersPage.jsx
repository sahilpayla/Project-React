import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../components/Orders';


const OrdersPage = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector(state => state.cart.items)
   const order = useSelector(state => state.order)
   const user = useSelector(state => state.user)

   return (
      <>
         <Navbar cartCount={cartItems.length} />
         <h1>My Orders</h1>
         {user.orders.map(order => {
            <Orders items={order.items} order={order} />

         })},
         <Footer />
      </>
   );
}

export default OrdersPage