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
  return (
    <section className="w-full max-w-[606px] h-fit flex flex-col gap-6">
      {screenWidth > 768 ? (
        <>
          {product?.images.map((item, index) => {
            return (
              <Image
                src={item}
                width={606}
                height={800}
                className="w-full min-w-[392px] lg:min-h-[800px] h-auto flex-1"
                key={index}
                alt={item}
              />
            );
          })}
        </>
      ) : (
          <Image
            src={product?.images[imageSourceNumber]}
            onMouseMove={(e) => {
              const rect = e.target.getBoundingClientRect();
              setClickX(e.clientX - rect.left); // X position within the image
              setMidpoint(rect.width / 2);
            }}
            onClick={() => {
              if (clickX > midpoint) {
                ToggleChange(1);
              } else {
                ToggleChange(-1);
              }
            }}
            width={606}
            height={800}
            className={`${clickX > midpoint? "mouse-right-arrow" : "mouse-left-arrow"} w-full min-w-[392px] lg:min-h-[800px] h-auto flex-1`}
            alt={"featured products"}
          />
      )}
    </section>
  );
};

export default ProductImages;
