"use client";

import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useCart } from "./cartContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { cart, setCart } = useCart();
  const savedAuthState = Cookies.get("isAuthenticated") === "true";
  const savedUserData = {
    username: Cookies.get("username") || "",
    email: Cookies.get("email") || "",
    password: Cookies.get("password") || "",
    permission: Cookies.get("permission") || "",
    token: Cookies.get("token") || "",
  };

  const [authData, setAuthData] = useState({
    ...savedUserData,
    loggedIn: savedAuthState,
  });

  useEffect(() => {
    Cookies.set("isAuthenticated", authData.loggedIn, { expires: 7 });
    Cookies.set("username", authData.username, { expires: 7 });
    Cookies.set("email", authData.email, { expires: 7 });
    Cookies.set("password", authData.password, { expires: 7 });
    Cookies.set("permission", authData.permission, { expires: 7 });
    Cookies.set("token", authData.token, { expires: 7 });
  }, [authData]);

  useEffect(() => {
    const Submitted = async () => {
      try {
        const response = await fetch("/api/cart-many", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ authData, cart }),
        });

        if (!response.ok) {
          return;
        }
      } catch (error) {
        console.error("Error in Submitted():", error.message);
      } finally {
        setCart([]);
      }
    };

    if (authData?.loggedIn && cart?.length > 0) {
      Submitted();
    } else {
      // console.log("🚫 User not logged in");
    }
  }, [authData, cart]);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
