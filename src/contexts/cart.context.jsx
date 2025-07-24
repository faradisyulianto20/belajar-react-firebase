import { createContext, useReducer } from 'react';
import {
  cartReducer,
  CART_ACTION_TYPES,
  addCartItem,
  removeCartItem,
  clearCartItem,
} from './cart.reducer';

export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems } = state;

  const toggleCart = () => {
    dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
  };

  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems });
  };

  const value = {
    isCartOpen,
    cartItems,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
