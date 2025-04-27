import Link from "next/link";
import React from "react";

const SecondaryButton = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="w-fit h-fit p-3 border border-black hover:text-white hover:bg-black text-black">
        {text}
      </button>
    </Link>
  );
};

export default SecondaryButton;
