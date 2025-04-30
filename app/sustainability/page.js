import React from "react";
import DisplaySection from "../components/displaySections";
import SustainabilityInfo from "../components/sustainabilityInfo"

const Page = () => {
  const SECTIONS = [
    {
      image: "/mission.png",
      value: 1,
      alt: "Person folding a gray button-up shirt.",
      title: "A Glimpse Into Our Impact",
      description:
        "From reducing water usage by 50% to planting over 1,000 trees, our journey reflects real change. With 75% of our materials now recycled or organic, every product tells a story of purpose and progress.",
    },
    {
      image: "/sustainability.png",
      value: -1,
      alt: "Multiple pieces of clothing stacked on top of each other.",
      title: "How You Help Shape a Greener Future",
      description:
        "Every TrendSphere purchase supports conscious fashion. Reuse our packaging, advocate for sustainability, and be part of a movement where style and responsibility walk hand in hand.",
    },
    {
      image: "/values.png",
      value: 1,
      alt: "Woman smiling at the camera while sewing clothing.",
      title: "Ethical Recognition & Global Standards",
      description:
        "We’re proud partners in carbon offset initiatives and holders of globally respected certifications like GOTS and Fair Trade—ensuring our fashion aligns with your values.",
    },
  ];
  return (
    <main className="flex flex-col custom-gap-9">
      <div
        className="w-full flex  items-center justify-center text-center bg-[url('/sustainabilityHero.png')] bg-no-repeat bg-center bg-cover h-[606px]"
      >
        <div className="flex-col custom-gap-6 w-[392px] text-white">
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
