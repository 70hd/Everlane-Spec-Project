import Image from "next/image";
import React, { useEffect } from "react";
import PrimaryButton from "../foundation/primary-button";
import Cart from "./cart";
import { SHOP_OPTIONS } from "../../data/shop-options";
import Link from "next/link";
const FilterActions = ({
  activeFilters,
  setActiveFilters,
  setActiveSingleFilters,
  ApplyFilters,
}) => (
  <div className="flex flex-col custom-gap-3 items-center justify-center">
    <p>{activeFilters.length} Active Filters</p>
    <div className="w-fit h-fit flex custom-gap-3">
      <button
        className="w-fit h-fit p-3 bg-black hover:bg-black/75 text-white"
        onClick={() => {
          setActiveFilters([]);
          setActiveSingleFilters([]);
        }}
      >
        Clear Filters
      </button>
      <button
        className="w-fit h-fit p-3 hover:bg-black/75 bg-black text-white"
        onClick={ApplyFilters}
      >
        Apply
      </button>
    </div>
  </div>
);

const ModalUi = ({
  ApplyFilters,
  activeSingleFilters,
  activeFilters,
  modal,
  setModal,
  categoriesAndFilters,
  Section,
  setActiveFilters,
  setActiveSingleFilters,
  logo,
  value,
  canScroll,
  shopClicked,
  setShopClicked,
}) => {
  const isFilters = categoriesAndFilters[0]?.filters;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!canScroll && modal) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modal, canScroll]);

  const showNotShopClicked = !shopClicked
    ? "translate-x-[-500px]"
    : value > 0
    ? "translate-x-0"
    : "-translate-x-0";
  const BackButton = ({ onClick }) => (
    <div
      className={`flex custom-gap-3 cursor-pointer absolute top-6 items-center transition-transform duration-500 transform ${showNotShopClicked}`}
      onClick={onClick}
    >
      <Image
        src="/right-arrow.svg"
        width={20}
        height={20}
        alt="arrow facing the left direction"
        className="rotate-180 min-w-[20px] max-w-[20px]"
      />
      <p>Back</p>
    </div>
  );

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-label="Filter and shop modal"
      className={`fixed top-0  h-screen z-50 border border-black/25 bg-white custom-2 p-12 pt-14 custom-gap-9 transition-transform duration-500 overflow-hidden flex flex-col ${
        value > 0 ? "right-0" : "left-0"
      } transform ${
        modal
          ? "translate-x-0"
          : value > 0
          ? "translate-x-full"
          : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div>
        <BackButton onClick={() => setShopClicked(false)} />
        <div
          className={`flex items-end min-w-[285px] w-full mb-9 ${
            logo || isFilters
              ? "justify-between"
              : value > 0
              ? "justify-end"
              : "justify-start"
          }`}
        >
          {isFilters && <p>Clear Filters ({activeFilters.length})</p>}
          {logo && (
            <Image
              src="/logo.svg"
              width={165}
              height={19}
              alt="everlane logo"
              className="max-w-[125px] md:min-w-[165px]"
            />
          )}
          <Image
            src="/close.svg"
            width={20}
            height={20}
            alt="close icon"
            onClick={() => setModal(false)}
            className="hover:cursor-pointer min-w-[20px]"
          />
        </div>
      </div>

      {/* Main Modal Content */}
      <div
        className={`w-full flex flex-col custom-gap-6 overflow-y-auto max-h-[80vh] transition-transform duration-500 transform ${
          shopClicked
            ? "translate-x-[500px]"
            : value > 0
            ? "translate-x-0"
            : "-translate-x-0"
        }`}
      >
        {categoriesAndFilters.map((item, index) => (
          <div key={index}>
            {item.filters ? (
              <Section
                category={item.category}
                filters={item.filters}
                selection={item.selection}
                type={item.type}
              />
            ) : item.button ? (
              <div className="flex justify-start w-full">
                <PrimaryButton href={item.link} text={item.button} />
              </div>
            ) : item.collections ? (
              <Section text={item.category} collections={item.collections} />
            ) : item.cart ? (
              <Cart modal={modal} />
            ) : (
              <a href={item.link}>
                <h2>{item.category}</h2>
              </a>
            )}
          </div>
        ))}

        {isFilters && (
          <FilterActions
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
            setActiveSingleFilters={setActiveSingleFilters}
            ApplyFilters={ApplyFilters}
          />
        )}
      </div>

      {/* Shop View */}
      <div
        className={`w-[285px] flex absolute top-[112px] flex-col custom-gap-6 overflow-y-auto max-h-[80vh] transition-transform duration-500 transform ${showNotShopClicked}`}
      >
        {SHOP_OPTIONS.map((section) => (
          <div key={section.type} className="flex w-full flex-col custom-gap-3">
            <h2>{section.type}</h2>
            <div className="grid grid-cols-2 gap-4">
              {section.links.map((item, index) => (
                <a key={index} href={item.link} className="flex flex-col gap-2">
                  <Image
                    src={item.image}
                    alt={item.alt || item.text}
                    width={500}
                    height={500}
                    className="w-auto min-h-[185px] max-h-[185px] object-cover"
                  />
                  <p className="p2 p-2">{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModalUi;
