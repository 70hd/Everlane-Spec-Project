import Image from "next/image";
import React, { useState } from "react";
import Input from "./input";
import EmailSignup from "./email-signup";

const QuantityChanger = ({ value, setQuantity, quantity }) => (
  <Image
    src={`/${value}.svg`}
    width={20}
    height={20}
    alt={value}
    onClick={() => {
      if (value === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
      if (value === "plus") setQuantity((prev) => prev + 1);
    }}
    className="cursor-pointer min-w-[20px]"
  />
);

const ColorPicker = ({
  color,
  displayedColor,
  setActiveColor,
  setActiveColorHex,
}) => (
  <div className="w-full h-fit flex flex-col gap-3">
    <p>Color: {displayedColor}</p>
    <div className="flex gap-3">
      {color.map((item, index) => (
        <div
          key={index}
          className={`w-fit h-fit p-1 rounded-full ${
            displayedColor === item.colorName
              ? "border-black border-[0.2px]"
              : ""
          } cursor-pointer`}
          onClick={() => {
            setActiveColor(item.colorName);
            setActiveColorHex(item.colorHex);
          }}
        >
          <div
            className="w-[16px] h-[16px] rounded-full"
            style={{
              backgroundColor:
                item.colorHex === "#FFFFFF" ? "#efefef" : item.colorHex,
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const SizeSelector = ({ sizes, size, setSize }) => (
  <div className="w-full flex flex-col gap-3 h-fit">
    <div className="flex justify-between w-full">
      <p>Size</p>
      <a href="/size chart" className="underline">
        View Size Chart
      </a>
    </div>
    <select
      id="options"
      name="options"
      value={size}
      onChange={(e) => setSize(e.target.value)}
      className="w-[285px] h-fit p-3 border border-black"
    >
      {sizes.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
);

const ProductChangeableInfo = ({
  color,
  displayedColor,
  setActiveColor,
  activeColor,
  setActiveColorHex,
  activeColorHex,
  product,
  setSize,
  setQuantity,
  size,
  displayedHex,
  quantity,
  authData,
  ORIGINAL_SALE,
  setModal,
  setCart,
  sale,
  inventory,
}) => {

  const [emailData, setEmailData] = useState({ email: "" });

  const handleChange = (e) => {
    setEmailData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setModal(true);
  
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          color: displayedColor,
          size,
          colorHex: displayedHex,
          quantity,
          product,
          authData,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({})); // safely parse json or empty
        const errorMessage = errorData.message || "Unknown error occurred.";
        console.error("Error during fetch:", errorMessage);
        throw new Error(errorMessage);
      }
  
  
    } catch (error) {
      console.error("Submission error:", error.message || error);
    }
  };
  
  
  const handleGuestSubmit = () => {
    setModal(true);
    setCart((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.title === product.title &&
          item.selectedColor === activeColor &&
          item.selectedColorName === activeColorHex &&
          item.size === size &&
          item.price === sale &&
          item.originalPrice === product.price &&
          item.image === product.images[0]
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          title: product.title,
          quantity,
          selectedColor: activeColor,
          selectedColorName: activeColorHex,
          size,
          price: sale,
          originalPrice: product.price,
          image: product.images[0],
          ORIGINAL_SALE: Math.round((1 - ORIGINAL_SALE) * 100),
        },
      ];
    });
  };
  const Button = (({text}) => (
    <button
    className="w-fit h-fit p-3 border hover:bg-black/75 border-black bg-black text-white"
    onClick={authData.loggedIn ? handleSubmit : handleGuestSubmit}
  >
    <p>{text}</p>
  </button>
  ))
  return (
    <section className="w-full h-fit flex flex-col justify-center gap-6">
      <ColorPicker
        color={color}
        displayedColor={displayedColor}
        setActiveColor={setActiveColor}
        setActiveColorHex={setActiveColorHex}
      />

      <SizeSelector sizes={product?.size || []} size={size} setSize={setSize} />

      {inventory !== 0 ? (
        <div className="w-fit h-fit flex gap-6">
          <div className="w-fit h-fit flex gap-[6px] p-3 border border-black">
            <QuantityChanger
              value="minus"
              setQuantity={setQuantity}
              quantity={quantity}
            />
            <p>{quantity}</p>
            <QuantityChanger
              value="plus"
              setQuantity={setQuantity}
              quantity={quantity}
            />
          </div>
          <Button text={"Add to Cart"}/>
        </div>
      ) : (
        <div className="w-full h-fit flex flex-col gap-3">
          <p>Get notified when this product is back in stock</p>
          <EmailSignup cta={"Submit"} red={true} route={"/api/newsletter"}/>
          
        </div>
      )}
    </section>
  );
};

export default ProductChangeableInfo;
