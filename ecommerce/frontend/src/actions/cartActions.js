export const addToCart = (game, quantity, varient) => (dispatch, getState) => {
   let cartItem = {
      name: game.name,
      _id: game._id,
      image: game.image,
      varient: game.varient,
      quantity: game.quantity,
      prices: game.prices,
      price: game.prices[0][varient] * quantity
   }

   dispatch({type:'ADD_TO_CART', payload : cartItem})

   const cartItems = getState().cartReducer.cartItems
   localStorage.setItem('cartItems', JSON.stringify(cartItems) )

}