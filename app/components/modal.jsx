import Image from "next/image";
import React, { useState, useEffect } from "react";
import ModalUi from "./modal-ui";
import AnimatedArrow from "./animated-arrow";

const Filters = ({
  finalFilters,
  setFinalFilters,
  openCategories,
  setOpenCategories,
  status,
  ALL_CATEGORIES_AND_FILTERS,
  // setTestFilters,
}) => {
  const [modal, setModal] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [activeSingleFilters, setActiveSingleFilters] = useState([]);
  const [newActiveFilters, setNewActiveFilters] = useState([]);

  useEffect(() => {
    setActiveSingleFilters([]);
    setActiveFilters([]);
    setFinalFilters([]);
    setOpenCategories([]);
  }, [status]);

  useEffect(() => {
    const extractedFilters = activeSingleFilters.flatMap((item) =>
      Object.values(item)
    );
    const combinedFilters = [...activeFilters, ...extractedFilters.flat()];
    setNewActiveFilters(combinedFilters);
    // setTestFilters(combinedFilters); // ✅ No return here
  }, [activeFilters, activeSingleFilters]);

  const ApplyFilters = () => {
    const extractedFilters = activeSingleFilters.flatMap((item) =>
      Object.values(item)
    );
    const combinedFilters = [...activeFilters, ...extractedFilters.flat()];
    setFinalFilters(combinedFilters);
    setModal(false);
  };

  useEffect(() => {
    const UPDATED_FILTERS = [];
    ALL_CATEGORIES_AND_FILTERS.forEach((item) => {
      const matchedFilter = activeSingleFilters.find(
        (filter) => filter[item.category]
      );
      if (matchedFilter) {
        UPDATED_FILTERS.push(...matchedFilter[item.category]);
      }
    });
  }, [JSON.stringify(activeSingleFilters)]);

  const Section = ({ selection, filters, category, type }) => {
    if (!category) return null;

    return (
      <div className="flex flex-col custom-gap-3">
        <div className="w-full h-fit flex custom-gap-3 justify-start items-center">
          <h2>{category}</h2>
          <AnimatedArrow
            onClick={() =>
              setOpenCategories((prev) =>
                prev.includes(category)
                  ? prev.filter((cat) => cat != category)
                  : [...prev, category]
              )
            }
            isActive={openCategories.includes(category)}
          />
          

        </div>
        {openCategories.includes(category) && (
          <div className="flex flex-col custom-gap-3">
            {filters.map((filter, index) => {
              const label = filter.text || filter;
              // multi-select categories, check if the filter is selected
              const multiChecked =
                Array.isArray(activeFilters) && activeFilters.includes(filter);

              const singleEntry = activeSingleFilters.find((item) => {
                let categoryKey;

                if (
                  filter.text &&
                  Array.isArray(category) &&
                  typeof category[0] === "object"
                ) {
                  categoryKey = Object.keys(category[0])[0];
                } else {
                  categoryKey = category;
                }

                return Object.keys(item)[0] === categoryKey;
              });

              const singleCategory = singleEntry?.[category]?.[0];
              const singleChecked =
                singleCategory?.min !== undefined &&
                singleCategory?.max !== undefined
                  ? singleCategory.min === filter.min &&
                    singleCategory.max === filter.max
                  : singleEntry?.[category]?.[0] === filter;

              const isChecked =
                selection === "singleSelection" ? singleChecked : multiChecked;

              const colorFilters = ALL_CATEGORIES_AND_FILTERS?.find(
                (item) => item.category === "Colors"
              );

              const filterColorMap = {};
              colorFilters?.filters?.forEach((color) => {
                const colorName = color.text || color;
                const lower = colorName.toLowerCase();
                filterColorMap[lower] = `checked:bg-${
                  lower === "white"
                    ? "gray"
                    : lower === "gold"
                    ? "yellow"
                    : lower === "brown"
                    ? "amber"
                    : lower
                }${
                  lower !== "black" ? (lower === "brown" ? "-700" : "-500") : ""
                }`;
              });
              const currentFilter =
                filter.min !== undefined && filter.max !== undefined
                  ? { min: filter.min, max: filter.max }
                  : filter;
              const inputId = `${category}-${index}`;

              return (
                <div key={index} className="flex gap-[6px]  items-center">
                  <input
                    id={inputId}
                    name={label}
                    type={
                      selection === "singleSelection" ? "radio" : "checkbox"
                    }
                    checked={isChecked}
                    className={`appearance-none w-[17px] h-[17px] border border-black ${
                      selection !== "singleSelection"
                        ? "rounded-none"
                        : "rounded-full"
                    } ${
                      (filterColorMap && filterColorMap[label.toLowerCase()]) ||
                      "checked:bg-black"
                    } checked:border-black`}
                    onClick={() => {
                      if (selection === "singleSelection" && isChecked) {
                        setActiveSingleFilters((prev) =>
                          prev.filter(
                            (item) => Object.keys(item)[0] !== category
                          )
                        );
                      }
                    }}
                    onChange={() => {
                      if (selection === "singleSelection") {
                        // If not already selected, update/add the selection.
                        if (!isChecked) {
                          const existingEntry = activeSingleFilters.find(
                            (item) => Object.keys(item)[0] === category
                          );
                          if (existingEntry) {
                            setActiveSingleFilters((prev) =>
                              prev.map((item) =>
                                Object.keys(item)[0] === category
                                  ? { [category]: [currentFilter] }
                                  : item
                              )
                            );
                          } else {
                            setActiveSingleFilters((prev) => [
                              ...prev,
                              { [category]: [currentFilter] },
                            ]);
                          }
                        }
                      } else {
                        // For multi‑selection, simply toggle the value.
                        setActiveFilters((prev) => {
                          if (prev.includes(currentFilter)) {
                            return prev.filter(
                              (prevFilter) => prevFilter !== currentFilter
                            );
                          } else {
                            return [...prev, currentFilter];
                          }
                        });
                      }
                    }}
                  />
                  <label>{label}</label>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-fit h-fit flex justify-between py-4">
      {/* <div className="w-[98px] h-[17px]" /> */}
      <button
        className="w-fit h-fit flex gap-[6px] hover:cursor-pointer"
        aria-label="Open filters modal"
        onClick={() => setModal(true)}
      >
        <span>Filters</span>
        <Image
          src="/filters-icon.svg"
          width={20}
          height={20}
          className="min-w-[20px]"
          alt="Filters Icon"
          role="presentation"
        />
      </button>

      {modal && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-50"
          onClick={() => setModal(false)}
        />
      )}
      <ModalUi
        value={1}
        ApplyFilters={ApplyFilters}
        setActiveFilters={setActiveFilters}
        setActiveSingleFilters={setActiveSingleFilters}
        activeFilters={newActiveFilters}
        activeSingleFilters={activeSingleFilters}
        modal={modal}
        Section={Section}
        setModal={setModal}
        categoriesAndFilters={ALL_CATEGORIES_AND_FILTERS}
      />
      <div className="w-full h-fit flex custom-gap-9"></div>
    </section>
  );
};

export default Filters;
