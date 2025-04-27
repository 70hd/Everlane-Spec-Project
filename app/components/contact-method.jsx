import Image from "next/image";
import React from "react";

const Info = ({data}) => {
  return (
    <div className="max-w-[392px] w-full h-fit flex flex-col gap-3 items-center justify-center text-center">
      <p className="p-semibold">{data?.title}</p>
      <div className="flex flex-col">
        {Array.isArray(data?.text) ? (
          data?.text.map((line, idx) => <p key={idx}>{line}</p>)
        ) : (
          <p>{data?.text}</p>
        )}
      </div>

      <div className="w-fit h-fit flex gap-3">
        <Image src={data?.image} width={20} height={20} className="min-w-[20px]" alt="info icon" />
        <p>{data?.cta}</p>
      </div>
    </div>
  );
};

const ContactMethod = ({ data }) => {
    return (
      <section className="w-full max-w-[1248px] sm:flex-row flex-col flex gap-9">
        {data.map((contact, index) => (
          <Info data={contact} key={index} />
        ))}
      </section>
    );
  };
  

export default ContactMethod;
