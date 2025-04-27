"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Products from "./product";
import Loading from "./loading";

const Carousel = ({ newArrivals, isLoading }) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  const ITEM_WIDTH = 36 + 285;

  const MAX_OFFSET = -(ITEM_WIDTH * (newArrivals.length - 2))


  const handleSlide = (dir) => {
    setOffset((prev) =>
      dir === "next"
        ? Math.max(prev - ITEM_WIDTH, MAX_OFFSET)
        : Math.min(prev + ITEM_WIDTH, 0)
    );
  };

  const Arrow = ({ direction }) => (
    <button
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
      onClick={() => handleSlide(direction)}
      className="p-2"
    >
      <Image
        src="right-arrow.svg"
        width={20}
        height={20}
        className="min-w-[20px]"
        alt="arrow turning right"
        style={{
          transform: direction === "prev" ? "scaleX(-1)" : undefined,
        }}
      />
    </button>
  );

  const isEmpty = isLoading || newArrivals?.length === 0;

  return (
    <section
      className="w-fit h-fit flex flex-col gap-9"
      role="region"
      aria-label="New arrivals carousel"
    >
      {/* Arrows */}
      <div className="flex gap-3 items-start justify-start min-h-[40px]">
        <Arrow direction="prev" />
        <Arrow direction="next" />
      </div>

      {/* Sliding Products */}
      <div className="overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex flex-row gap-9"
          style={{
            width: ITEM_WIDTH * newArrivals?.length + newArrivals?.length * 36,
          }}
          animate={{ x: offset }}
          transition={{ stiffness: 10, damping: 25 }}
        >
          {isEmpty ? (
            <div className="max-h-[392px] flex flex-row">
              <Loading number={4} />
            </div>
          ) : (
            <Products items={newArrivals} sameSize={true} />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Carousel;
