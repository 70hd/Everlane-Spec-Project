import React, { useEffect, useMemo, useState } from "react";
import Search from "./search";
import Dropdown from "./status-dropdown";
// import SearchFilters from "./search-filters";
import ProductFilters from "./product-filters";
import Fuse from "fuse.js";
import { ALL_CATEGORIES_AND_FILTERS } from "../../data/all-categories-and-filters";
import Filters from "./modal";

const SearchInfo = ({
  finalProducts,
  products,
  typeClicked,
  status,
  setTypeClicked,
  setStatus,
  finalFilters,
  setFinalFilters,
  openCategories,
  setOpenCategories,
  setFinalProducts,
  colors,
  finalUrl,
  collections,
  product,
  link,
  noDropdown,
  displayProducts,
  setFinalFinalProducts,
}) => {
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    let products = displayProducts ? displayProducts : searchedProducts;
    finalFilters.forEach((filter) => {
      const finalFilter =
        typeof filter === "object" && filter !== null
          ? [filter]
          : [`${filter}`];
      products = ProductFilters({
        finalFilters: finalFilter,
        finalProducts: products,
        ALL_CATEGORIES_AND_FILTERS,
        status,
        colors,
      });
    });

    setFinalFinalProducts
      ? setFinalFinalProducts(products)
      : setFinalProducts(products);
  }, [finalFilters]);

  useEffect(() => {
    if (!collections) {
      const query = finalUrl.toLowerCase().trim();

      const colorFuse = new Fuse(colors, {
        includeScore: true,
        threshold: 0.4,
        keys: ["colorHex", "colorName"],
      });
      const colorResult = colorFuse.search(query);
      const colorSearch = colorResult.map((r) => r.item);
      const colorMatchedProductIds = new Set(
        colorSearch.map((c) => c.productId)
      );
      const hasColorMatch = colorSearch.length > 0;

      const productFuse = new Fuse(products, {
        includeScore: true,
        keys: [
          "title",
          "description",
          "status",
          "productCare",
          "productDetails",
        ],
      });
      const productResult = productFuse.search(query);
      const productSearch = productResult.map((r) => r.item);
      const hasProductMatch = productSearch.length > 0;

      const topColorMatch = colorResult[0];
      const isSingleWord = query.split(" ").length === 1;
      const isConfidentColorMatch = topColorMatch && topColorMatch.score < 0.1;
      const isLikelyJustColorSearch = isSingleWord && isConfidentColorMatch;

      let searchProducts = [];

      if (isLikelyJustColorSearch && hasColorMatch) {
        searchProducts = Array.from(colorMatchedProductIds)
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean);
      } else if (hasColorMatch && hasProductMatch) {
        searchProducts = productSearch.filter((product) =>
          colorMatchedProductIds.has(product.id)
        );
      } else if (hasColorMatch) {
        searchProducts = Array.from(colorMatchedProductIds)
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean);
      } else if (hasProductMatch) {
        searchProducts = productSearch;
      }

      setSearchedProducts(searchProducts);
    } else {
      const searchedProducts = products?.filter((product) => {
        return (
          product.status &&
          status &&
          product.status.toLowerCase() === status.toLowerCase()
        );
      });

      setSearchedProducts(searchedProducts || []);
    }
  }, [products, finalUrl, collections, status]);

  useEffect(() => {
    if (JSON.stringify(finalProducts) !== JSON.stringify(searchedProducts)) {
      setFinalProducts(searchedProducts);
    }
  }, [searchedProducts]);

  // useEffect(() => {
  //   console.log({
  //     finalFilters: testFilters,
  //     testProducts: displayProducts,
  //     // displayProducts: displayProducts,
  //     ALL_CATEGORIES_AND_FILTERS: ALL_CATEGORIES_AND_FILTERS,
  //     status: status,
  //     colors: colors,
  //   }
  //   )
  //   const k = ProductFilters({
  //     finalFilters: testFilters,
  //     finalProducts: testProducts,
  //     setFinalProducts: setTestProducts,
  //     ALL_CATEGORIES_AND_FILTERS,
  //     status,
  //     colors,
  //   });
  //   console.log(k)
  // }, [testFilters]);
  const categoryFilter = searchedProducts.filter(
    (prev) => prev.status === status
  );
  useEffect(() => {
    if (
      finalFilters.length === 0 &&
      searchedProducts.length > finalProducts.length &&
      categoryFilter.length > finalProducts.length
    ) {
      setFinalProducts([...searchedProducts]);
    }
  }, [finalFilters, searchedProducts]);
  useEffect(() => {
    if (searchedProducts.length < 1) {
      // setFinalProducts(products);
      setSearchedProducts(products);
    }
  }, [finalProducts]);
  useEffect(() => {
    if (
      status === "All Products" ||
      status === "All Mens Clothing" ||
      status === "All Womens Clothing"
    ) {
      setFinalProducts(searchedProducts);
    } else {
      const filtered = searchedProducts.filter(
        (product) => product.status?.toLowerCase() === status.toLowerCase()
      );
      setFinalProducts(filtered);
    }
  }, [status, searchedProducts]);

  // useEffect(() => {
  //   if (status === "All Products") {
  //     setFinalProducts(searchedProducts);
  //   } else {
  //     if (product) {
  //       return updateSearchedProducts(status.toLowerCase());
  //     } else {
  //       return setFinalProducts(categoryFilter);
  //     }
  //   }
  // }, [status]);
  // useEffect(() => {
  //   setFinalProducts(searchedProducts);
  // }, [searchedProducts]);
  return (
    <section className="flex flex-col gap-6 mb-6">
      {(collections === false || product === false) && (
        <div className="flex flex-col gap-3">
          <h1>
            {searchedProducts.length > 0
              ? `We found ${finalProducts.length} finalProducts`
              : `We found ${products.length} finalProducts`}
          </h1>
        </div>
      )}

      {(collections === false || product === false) && (
        <Search link={"search"} />
      )}

      <div className=" w-full h-fit flex justify-between items-end">
        {!noDropdown ? (
          <Dropdown
            typeClicked={typeClicked}
            setTypeClicked={setTypeClicked}
            status={status}
            setStatus={setStatus}
            collections={collections}
            product={product}
            link={link}
          />
        ) : (
          <div />
        )}
        <Filters
          finalFilters={finalFilters}
          // setTestFilters={setTestFilters}
          setFinalFilters={setFinalFilters}
          openCategories={openCategories}
          setFinalProducts={setFinalProducts}
          finalProducts={finalProducts}
          setOpenCategories={setOpenCategories}
          status={status}
          ALL_CATEGORIES_AND_FILTERS={ALL_CATEGORIES_AND_FILTERS}
        />
      </div>
    </section>
  );
};

export default SearchInfo;
