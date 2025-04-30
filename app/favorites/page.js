"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import Accounts from "../components/logIn-createAccount";
import Products from "../components/product";
import Loading from "../components/loading";

const Favorites = () => {
  const { authData } = useAuth();
  const [hasMounted, setHasMounted] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!authData?.email || !hasMounted) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/hearted-products?email=${encodeURIComponent(
            authData.email
          )}&username=${encodeURIComponent(authData.username)}`
        );
        const data = await response.json();
        if (data.success) {
          const newData = data.products[0].products;
          setAllProducts(newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [authData, reload, hasMounted]);

  useEffect(() => {
    setReload(false);
  }, [allProducts]);

  if (!hasMounted) return null;

  return (
    <main className={`flex flex-col custom-gap-9 ${!authData.loggedIn ? "dynamic-padding" : "dynamic-x-padding"}`}>
      <h1>
        {!authData.loggedIn
          ? "Please log in to view your favorite products."
          : allProducts.length > 0
          ? "Here are all your favorite items."
          : "You haven't favorited any products yet."}
      </h1>
      {!authData.loggedIn ? (
        <div className="w-fit h-fit flex flex-col custom-gap-3">
          <Accounts isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        </div>
      ) : (
        <div className="flex custom-gap-9 w-full flex-wrap">
          {isLoading ? (
            <Loading number={4} />
          ) : (
            <Products items={allProducts} setReload={setReload} />
          )}
        </div>
      )}
    </main>
  );
};

export default Favorites;
