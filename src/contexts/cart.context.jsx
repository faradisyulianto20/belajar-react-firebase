import { createContext, useState } from "react";
import CartItem from "../components/cart-item/cart-item.component";

const addCartItem  = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
         ? {...cartItem, quantity: cartItem.quantity + 1}
         : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(item => item.id === productToRemove.id);

  if (existingItem.quantity === 1) {
    
    return cartItems.filter(item => item.id !== productToRemove.id);
  }

  return cartItems.map(item =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(item => item.id !== itemToClear.id);
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
}
)

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    } 

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    };

    const clearItemFromCart = (itemToClear) => {
        setCartItems(clearCartItem(cartItems, itemToClear));
    };
    
    const value = {isCartOpen, setIsCartOpen,  cartItems, addItemToCart, removeItemFromCart,
    clearItemFromCart,}

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}