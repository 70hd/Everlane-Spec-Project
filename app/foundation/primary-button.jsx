import Link from "next/link";
import React from "react";

const PrimaryButton = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className="w-fit min-w-fit h-fit p-3 border border-black bg-black text-white hover:bg-black/75">
        {text}
      </button>
    </Link>
  );
};

export default PrimaryButton;
