"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Loading from "./loading";

const SustainabilityInfo = () => {
  const [clicked, setClicked] = useState({ text: "", image: "", alt: "" });
  const [loading, setLoading] = useState(true);

  const DATA = [
    { text: "Materials", image: "/mission.png", alt: "Person folding a gray button-up shirt." },
    { text: "Ethical Products", image: "/sustainability.png", alt: "Multiple pieces of clothing stacked on top of each other." },
    { text: "Packaging", image: "/values.png", alt: "Woman smiling at the camera while sewing clothing." },
  ];

  useEffect(() => {
    setClicked({ text: DATA[0].text, image: DATA[0].image, alt: DATA[0].alt });
    setLoading(false);
  }, []);

  return (
    <section className="w-full dynamic-padding flex flex-col gap-6 text-center items-center justify-center">
      <div className="w-full border-b border-black md:p-3 p-1 flex gap-3  justify-center">
        {DATA.map((item, id) => (
          <button
            key={id}
            className={`cursor-pointer transition-all ${
              item.text === clicked.text ? "text-black" : "text-black/50"
            }`}
            onClick={() =>
              setClicked({
                text: item.text,
                image: item.image,
                alt: item.alt,
              })
            }
          >
            {item.text}
          </button>
        ))}
      </div>
      <p className="max-w-[606px] w-full">
        Our garments are crafted from materials that are kind to the
        environment, ensuring every piece is as sustainable as it is stylish.
      </p>
      {!loading ? (
        <Image
          src={clicked?.image}
          alt={clicked?.alt}
          width={1248}
          height={606}
          className="object-cover max-h-[505px]"
        />
      ) : (
        <Loading number={1} />
      )}
    </section>
  );
};

export default SustainabilityInfo;
