import Image from "next/image";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../foundation/primary-button";
import Cart from "./cart";
import { SHOP_OPTIONS } from "../../data/shop-options";
import Link from "next/link";
import AnimatedArrow from "./animated-arrow";

const ShopUi = ({ modal, canScroll,setModal }) => {
  const [clicked, setClicked] = useState(0);
  useEffect(() => {
    if (canScroll) {
      return;
    }
    if (modal) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal]);

  return (
    <section
      className={`fixed top-0 w-screen h-fit justify-end items-end border  bg-white z-10 dynamic-x-padding pb-12 flex flex-col gap-6 transition-transform duration-500 overflow-hidden transform ${
        modal ? "translate-y-0" : "translate-y-[-1000px]"
      }`}
    >
      
      <div className="flex gap-6 mt-[126px] p-3 w-full max-w-[1248px] justify-center items-center border-b-[1px]">
        {SHOP_OPTIONS.map((item, index) => (
          <p
          onClick={() => setClicked(index)}

            className={`${clicked === index ? "text-black" : "text-black/50"} cursor-pointer`}
            key={index}
          >
            {item.type}
          </p>
        ))}
      </div>
      <div className="w-full flex h-fit justify-between">
     
        {SHOP_OPTIONS[clicked].links.map((item, index) => (
          <Link onClick={(() => setModal((false)))} href={`http://localhost:3000/${item.link}`} key={index} className="w-fit h-fit flex flex-col gap-3">
            <Image
              src={item.image}
              width={222}
              height={285}
              alt={item.text || "Image"}
              className="min-h-[300px] max-h-[300px] w-full max-w-[222px]"
            />
            {item.link ? (
              <div className="flex items-center gap-1 hover:underline">
                <p>{item.text}</p>
          
              </div>
            ) : (
              <p>{item.text}</p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ShopUi;
