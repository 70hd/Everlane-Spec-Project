import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

const Product = ({ item, itemId, setReload,sameSize }) => {
  const { images, title, price, id } = item;
  const { authData, setAuthData } = useAuth();
  const [isHearted, setIsHearted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHearted, setShowHearted] = useState(false);

  useEffect(() => {
    if (authData.loggedIn === false) {
      setShowHearted(false);
    } else {
      setShowHearted(true);
    }
  }, []);

  // useEffect(() => {
  const checkIfHearted = async () => {
    if (!id || !authData?.email || !authData?.username) return;

    try {
      const response = await fetch(
        `/api/getHeart?productId=${encodeURIComponent(
          id
        )}&email=${encodeURIComponent(
          authData.email
        )}&username=${encodeURIComponent(authData.username)}`
      );

      const data = await response.json();

      if (response.ok) {
        setIsHearted(data.isHearted);
      } else {
        setError(data.error || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Failed to fetch heart status:", err);
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authData?.email && authData?.username) {
      checkIfHearted();
    }
  }, [authData?.email, authData?.username, id]);
  const handleSubmit = async () => {
    try {
      if (!authData || !authData.email) {
        console.error("User is not authenticated.");
        return;
      }

      // Optimistic update: assume the heart status changes immediately
      setIsHearted((prev) => !prev);

      const response = await fetch("/api/heart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: itemId,
          email: authData.email,
          username: authData.username,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.error || "Something went wrong");
        setIsHearted((prev) => !prev); // Revert the optimistic update if needed
      }
    } catch (error) {
      console.error("Error updating heart:", error);
      setIsHearted((prev) => !prev); // Revert the optimistic update if needed
    }
  };

  return (
    <div
    className={`w-full ${sameSize ? "max-w-[285px]" :"md:max-w-[285px] max-w-[606px]"}`}
      onClick={
        !showHearted && !loading
          ? () => (window.location.href = `/product/${title}`)
          : null
      }
    >
      <div className="w-full h-fit flex flex-col relative">
        <a href={`/product/${title}` }>
          <Image src={images[0]} width={285} height={392} alt="product image" className="w-full" />
        </a>

        {showHearted && !loading ? (
          <Image
            src={isHearted ? "/red-heart.svg" : "/heart.svg"}
            alt="heart icon"
            onClick={async () => {
              await handleSubmit();
              if (typeof setReload === "function") {
                setReload((prev) => !prev);
              } 
            }}
            width={20}
            height={22.4}
            className="absolute top-2 right-2 cursor-pointer min-w-[20px]"
          />
        ) : null}

        <div className="w-full h-fit flex flex-col custom-gap-3 p-3">
          <p>{title}</p>
          <p className="p-semibold">${price}</p>
        </div>
      </div>
    </div>
  );
};

const Products = ({ items, setReload,sameSize }) => {
  return (
    <section className="h-fit flex custom-gap-9 flex-wrap w-full">
      {items?.map((item, i) => (
        <Product
          itemId={item.id}
          key={item.id}
          item={item}
          setReload={setReload}
          sameSize={sameSize}
        />
      ))}
    </section>
  );
};

export default Products;
