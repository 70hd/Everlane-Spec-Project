import Image from "next/image";
import React from "react";
import Section from "../components/section";
import DisplaySection from "../components/displaySections";

const Impact = () => {

  const SECTIONS = [
    {
      image: "/mission.png",
      value: 1,
      alt: "Person folding a gray button-up shirt.",
      title: "Our Mission",
      description:
        "We bring you on-trend apparel that allows you to express yourself while feeling confident about your choices. We’re here to show that looking great and doing good can go hand in hand. Each piece in our collection is thoughtfully designed to reflect modern fashion sensibilities while minimizing its impact on the environment.",
    },
    {
      image: "/sustainability.png",
      value: -1,
      alt: "Multiple pieces of clothing stacked on top of each other.",
      title: "Sustainability Commitment",
      description:
        "We believe fashion has the power to not only make you look great but also to inspire meaningful change. Our journey began with a simple yet ambitious idea: to redefine the way we think about clothing. In a world where fast fashion dominates, we wanted to create something different—a brand that prioritizes both style and sustainability.",
    },
    {
      image: "/values.png",
      value: 1,
      alt: "Woman smiling at the camera while sewing clothing.",
      title: "What We Stand For",
      description:
        "We believe fashion has the power to not only make you look great but also to inspire meaningful change. Our journey began with a simple yet ambitious idea: to redefine the way we think about clothing. In a world where fast fashion dominates, we wanted to create something different—a brand that prioritizes both style and sustainability.",
    },
    {
      image: "/vision.png",
      value: -1,
      alt: "Person folding a gray button-up shirt.",
      title: "Our Vision",
      description:
        "We believe fashion has the power to not only make you look great but also to inspire meaningful change. Our journey began with a simple yet ambitious idea: to redefine the way we think about clothing. In a world where fast fashion dominates, we wanted to create something different—a brand that prioritizes both style and sustainability.",
    },
  ];  
  return (
    <main className="w-full h-fit flex flex-col gap-9">
      <Image src={"/impact.png"} width={1440} height={392} alt="Multiple people working together to sew clothing." />
      <div className="w-full px-24 dynamic-padding justify-center items-center">
        <h1 className="w-full text-center">
          At Everlane, we want the right choice to be as easy as putting on a
          great T-shirt. That’s why we partner with the best, ethical factories
          around the world. Source only the finest materials. And share those
          stories with you—down to the true cost of every product we make. It’s
          a new way of doing things. We call it Radical Transparency.
        </h1>
      </div>
      <DisplaySection SECTIONS={SECTIONS} />
    </main>
  );
};

export default Impact;
