import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
import AnimatedArrow from "./animated-arrow";

const Section = ({ item, clicked, setClicked }) => {
  const isActive = clicked.includes(item.Id);
  const contentRef = useRef(null);
  const sectionRef = useRef(null);
  const [height, setHeight] = useState("45px");

  const toggle = () =>
    setClicked((prev) =>
      isActive ? prev.filter((id) => id !== item.Id) : [...prev, item.Id]
    );

  useLayoutEffect(() => {
    const contentHeight = sectionRef.current?.scrollHeight;
    if (isActive) {
      setHeight(`${contentHeight}px`); // 45px for the header
    } else {
      setHeight("45px");
    }
  }, [isActive]);

  return (
    <section
      key={item.Id}
      onClick={toggle}
      ref={sectionRef}
      style={{
        height: height,
        transition: "height 0.3s ease-in-out",
      }}
      className={`cursor-pointer w-full overflow-hidden flex flex-col custom-gap-6 p-3 border-black border-b-[1px] ${
        item.Id === 1 ? "border-t-[1px]" : ""
      }`}
    >
      <div className="w-full flex justify-between h-[30px]">
        <p>{item.Category}</p>
        <AnimatedArrow isActive={isActive}/>
      </div>
      <div ref={contentRef} className="pt-2">
        <p>{item.Description}</p>
      </div>
    </section>
  );
};

const Accordian = ({ items }) => {
  const [clicked, setClicked] = useState([]);

  return (
    <div className="w-full h-fit flex flex-col">
      {items.map((item) => (
        <Section
          key={item.Id}
          item={item}
          clicked={clicked}
          setClicked={setClicked}
        />
      ))}
    </div>
  );
};

export default Accordian;
