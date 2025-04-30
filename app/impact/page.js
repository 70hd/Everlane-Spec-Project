"use client"
import Image from "next/image";
import React from "react";
import Section from "../components/section";
import DisplaySection from "../components/displaySections";
import useScreenWidth from "../components/screen-width";

const Impact = () => {
  const screenWidth = useScreenWidth();

  const SECTIONS = [
    {
      image: "https://media.everlane.com/image/upload/c_fill,w_750,ar_450:300,q_auto:best:sensitive,dpr_2.0,f_auto/i/6433f166_b0ed",
      value: 1,
      alt: "Person folding a gray button-up shirt.",
      title: "Our Mission",
      description:
        "At Everlane, our mission is simple: to deliver fashion that empowers self-expression while embracing ethical responsibility. We strive to merge modern style with conscious choices, ensuring each garment is designed with purpose, integrity, and care for the planet.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2Fe580f78a10b8436ebbbba1a0e75037b0?format=webp&width=2000",
      value: -1,
      alt: "Stacked colorful clothing in a sustainable workshop.",
      title: "Sustainability Commitment",
      description:
        "Sustainability is the cornerstone of everything we do. From using recycled and organic materials to minimizing waste in our supply chain, we are committed to reshaping fashion into a force for good. Our commitment extends beyond words—we take action to reduce our impact every step of the way.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2F16773db3e2254c0f9fee073752bc3f8c?format=webp&width=2000",
      value: 1,
      alt: "Woman smiling while sewing a garment in a bright workspace.",
      title: "What We Stand For",
      description:
        "We stand for transparency, ethical production, and timeless style. Our brand is built on values that go beyond trends—values rooted in responsibility, fairness, and long-term impact. Every product we create reflects our dedication to people and the planet.",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets%2F444142b2cae54a19aeb8b5ba245feffe%2Fa37db4ee2d9649a680855ba3e4566eb0?format=webp&width=2000",
      value: -1,
      alt: "Tailor reviewing a sustainable clothing lineup.",
      title: "Our Vision",
      description:
        "Our vision is a world where fashion enhances life rather than exploits it. We imagine a future where ethical choices are standard, not exceptional—where every stitch contributes to a cleaner, more equitable world. With bold creativity and radical transparency, we're working to make that future real.",
    },
  ];
  const text =
    "At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency. ";
  return (
    <main className="w-full h-fit flex flex-col custom-gap-9">
      <Image
        src={"/impact.png"}
        width={1440}
        height={392}
        alt="Multiple people working together to sew clothing."
      />
      <div className="w-full  dynamic-padding justify-center items-center">
        {screenWidth > 768 ? (
          <h1 className="w-full text-center ">{text}</h1>
        ) : (
          <p className="w-full text-center "> {text}</p>
        )}
      </div>
      <DisplaySection SECTIONS={SECTIONS} />
    </main>
  );
};

export default Impact;
