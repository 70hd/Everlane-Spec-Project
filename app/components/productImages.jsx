import Image from "next/image";
import React, { useState } from "react";
import useScreenWidth from "./screen-width";

const ProductImages = ({ product }) => {
  const screenWidth = useScreenWidth();
  const [imageSourceNumber, setImageSourceNumber] = useState(0);
  const [clickX, setClickX] = useState();
  const [midpoint, setMidpoint] = useState();

  const ToggleChange = (value) => {
    if (product?.images[imageSourceNumber + value]) {
      setImageSourceNumber((prev) => prev + value);
    }
  };
  const Arrow = ({ side, disabled }) => {
    const src = disabled ? "/error-mouse.svg" : `/${side}-mouse-arrow.svg`;
    return (
      <Image
        src={src}
        width={36}
        height={36}
        alt={`${side} Arrow`}
        className={`absolute ${side}-0 top-1/2 -translate-y-1/2 cursor-pointer`}
        onClick={() => {
          if (!disabled) ToggleChange(side === "left" ? -1 : 1);
        }}
      />
    );
  };
  return (
    <section className="w-full max-w-[606px] h-fit flex flex-col custom-gap-6  ">
      {screenWidth > 768 ? (
        product?.images.map((src, i) => (
          <Image
            key={i}
            src={src}
            width={606}
            height={800}
            className="w-full min-w-[392px] lg:min-h-[800px] h-auto flex-1"
            alt={src}
          />
        ))
      ) : (
        <div className="relative bg-black">
          {screenWidth > 300 && (
            <>
             <Arrow side="left" disabled={imageSourceNumber === 0} />
             <Arrow side="right" disabled={imageSourceNumber === product?.images.length - 1} />
            </>
          )}
          <Image
            src={product?.images[imageSourceNumber]}
            onMouseMove={(e) => {
              const rect = e.target.getBoundingClientRect();
              setClickX(e.clientX - rect.left);
              setMidpoint(rect.width / 2);
            }}
            onClick={() =>
              clickX > midpoint ? ToggleChange(1) : ToggleChange(-1)
            }
            width={606}
            height={800}
            className="w-full lg:min-h-[800px] min-h-[285px] min-w-[175px] h-auto flex-1"
            alt="featured products"
          />
        </div>
      )}
    </section>
  );
};

export default ProductImages;
