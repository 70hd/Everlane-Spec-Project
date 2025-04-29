"use client";
import React from "react";
import Cart from "../components/cart";

const Page = () => {
  const Box = () => {
    return <div className="border h-[50px] w-full" />;
  };

  return (
    <main className="relative w-full dynamic-x-padding flex md:flex-row flex-col gap-9 h-fit">
      <div className="md:sticky top-10 md:w-[606px] w-full h-fit flex flex-col gap-6 dynamic-y-padding">
        <h2>Express Checkout</h2>
        <div className="w-full flex gap-3">
          {["2", "1"].map((item, index) => {
            return <Box key={index} />;
          })}
        </div>
        <Box />
      </div>
      <Cart />
    </main>
  );
};

export default Page;
