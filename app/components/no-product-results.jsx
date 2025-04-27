import React from "react";

const NoProductResults = ({setFinalFilters, finalFilters,ifStatement}) => {
  if (ifStatement) {
    return (
      <div className="flex flex-col gap-6 dynamic-padding">
        <h1>Uh oh. No results found</h1>
        <h2>
          There are not products coming up with your filters{" "}
          {[`${finalFilters}`]}"
        </h2>
        <button
          onClick={() => setFinalFilters([])}
          className="w-fit min-w-fit h-fit p-3 border border-black bg-black text-white hover:bg-black/75"
        >
          Clear Filters
        </button>
      </div>
    );
  }
};

export default NoProductResults;
