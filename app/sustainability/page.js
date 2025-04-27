import React from "react";
import DisplaySection from "../components/displaySections";
import SustainabilityInfo from "../components/sustainabilityInfo"

const Page = () => {
  const SECTIONS = [
    {
      image: "/mission.png",
      value: 1,
      alt: "Person folding a gray button-up shirt.",
      title: "Our Impact at a Glance",
      description:
        "We’ve reduced water use by 50%, planted over 1,000 trees, and use 75% organic or recycled materials to minimize our footprint.",
    },
    {
      image: "/sustainability.png",
      value: -1,
      alt: "Multiple pieces of clothing stacked on top of each other.",
      title: "Customer Role in Sustainability",
      description:
        "By choosing TrendSphere, you support eco-friendly fashion and can amplify your impact by reusing packaging and spreading the message of sustainability.",
    },
    {
      image: "/values.png",
      value: 1,
      alt: "Woman smiling at the camera while sewing clothing.",
      title: "Certifications or Partnerships",
      description:
        "Our certifications, like Fair Trade and GOTS, and partnerships in carbon offset programs reflect our dedication to ethical, sustainable fashion.",
    },
  ];
  return (
    <main className="flex flex-col gap-9">
      <div
        className="w-full flex  items-center justify-center text-center bg-[url('/sustainabilityHero.png')] bg-no-repeat bg-center bg-cover h-[606px]"
      >
        <div className="flex-col gap-6 w-[392px] text-white">
          <h1>How to Contact Everlane Client Services</h1>
          <p>Choose your preferred method of contact and connect with us</p>
        </div>
      </div>
      <DisplaySection SECTIONS={SECTIONS}/>
      <SustainabilityInfo/>
    </main>
  );
};

export default Page;
