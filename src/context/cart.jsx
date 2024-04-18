import { createContext, useState } from "react";

//1. crear contexto
export const CartContext = createContext();

// 2. crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // checkamos, con condicional, si el producto existe en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      //una forma seria usando structureClone
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // producto no esta en el carrito
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const removeToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    if (productInCartIndex >= 0) {
      //una forma seria usando structureClone
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity <= 0
        ? setCart(0)
        : (newCart[productInCartIndex].quantity -= 1);
      return setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, removeToCart }}
    >
      {children}
    </CartContext.Provider>
  );z
}
