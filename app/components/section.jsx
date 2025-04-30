import React from "react";
import Image from "next/image";
const Section = ({ image, alt, title, description, value }) => {
  return (
    <section
      className={`w-full items-center h-fit ${
        value > 0 ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"
      } flex custom-gap-9 dynamic-x-padding lg:mb-12 md:mb-6 sm:mb-3 mb-3`}
    >
      <Image
        src={image}
        width={606}
        height={392}
        alt={alt}
        className="w-full max-w-[606px] md:min-h-[192px] "
      />
      <div className="w-full max-w-[606px] flex flex-col custom-gap-6">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Section;
