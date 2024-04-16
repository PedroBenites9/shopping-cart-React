import { createContext, useState } from "react";

//1. crear contexto
export const CartContext = createContext();

// 2. crear provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // checkamos, con condicional, si el producto existe en el carrito

    const productInCart = cart.findIndex((item) => item.id === product.id);
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
