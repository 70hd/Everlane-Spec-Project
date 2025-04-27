"use client";
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const storedCart = Cookies.get("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setHasHydrated(true); 
  }, []);

  useEffect(() => {
    if (hasHydrated) {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    }
  }, [cart, hasHydrated]);

  return (
    <CartContext.Provider value={{ cart, setCart, hasHydrated }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);