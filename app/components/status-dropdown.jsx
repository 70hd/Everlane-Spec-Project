import React, { useRef } from "react";
import Image from "next/image";
import { SHOP_OPTIONS } from "../../data/shop-options";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedArrow from "./animated-arrow";

const Dropdown = ({
  typeClicked,
  product,
  setTypeClicked,
  status,
  setStatus,
  collections,
  accountOptions,
  setAccountStatus,
  link,
}) => {
  const dropdownRef = useRef(null);

  const options = SHOP_OPTIONS.filter(
    (option) => option.type?.toLowerCase() === link?.toLowerCase()
  );

  const text = accountOptions
    ? accountOptions
    : product && options.length > 0
    ? [ ...options["men" ? 0 : 1].links.map((item) => item.text)]
    : [
        "All Products",
        "On Sale",
        "New Arrival",
        "Limited Availability",
        "Best Seller",
      ];

  return (
    <section className="relative w-fit h-fit flex flex-col gap-[6px]  bg-white">
      {!accountOptions && (
        <div className="w-fit h-fit flex custom-gap-3 items-center bg-white">
          <button
            className={`${!collections && "cursor-pointer"} capitalize  w-fit text-start`}
            onClick={() => !collections && setTypeClicked((prev) => !prev)}
          >
            {status}
          </button>

          {!collections && (
            <AnimatedArrow onClick={() => setTypeClicked((prev) => !prev)} isActive={typeClicked}/>
          )}
        </div>
      )}

      <AnimatePresence>
        {typeClicked && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-full left-0 z-10 mt-2 w-max whitespace-nowrap bg-white flex flex-col gap-[6px] p-3"
          >
            {text.map(
              (item, index) =>
                item !== status && (
                  <button
                    key={index}
                    className="p1 text-left min-w-fit cursor-pointer hover:underline"
                    onClick={() => {
                      if (!accountOptions) {
                        setStatus(item);
                      }
                      setTypeClicked(false);
                      if (setAccountStatus) setAccountStatus(item);
                    }}
                  >
                    {item}
                  </button>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Dropdown;
