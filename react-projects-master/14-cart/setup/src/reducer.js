const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((cartItems) => cartItems.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItems)=> {
        if (cartItems.id === action.payload) {
            return {
                ...cartItems, 
                amount: cartItems.amount + 1
            }
        }
        return cartItems;

    });
    return { ...state, cart: tempCart };
  }
  
  if (action.type === "DECREASE") {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload) {
        return {
          ...cartItems,
          amount: cartItems.amount - 1,
        };
      }
      return cartItems;
    }).filter((cartItems) => cartItems.amount !== 0)
    return { ...state, cart: tempCart };
  }
  return state;
};

export default reducer;
