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
        if (cartItems.id ===payload) {
            return {
                ...cartItems, 
            }
        }
        return cartItems;

    });
    return { ...state, cart: tempCart };
  }
  return state;
};

export default reducer;
