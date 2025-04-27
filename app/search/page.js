"use client";
import React, { useEffect, useMemo, useState } from "react";
import Products from "../components/product";
import useFetchProducts from "../apiFetches/products";
import SearchInfo from "../components/search-info"
import Loading from "../components/loading"
import NoProductResults from "../components/no-product-results";

const Page = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const { products, colors, loading } = useFetchProducts();
  const [finalProducts, setFinalProducts] = useState([]);
  const [finalFilters, setFinalFilters] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);
  const [typeClicked, setTypeClicked] = useState(false);
  const [status, setStatus] = useState("All Products");
  const [heart, setHeart] = useState();
  const createHeartState = useMemo(() => {
    return products?.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: { isHearted: false },
      };
    }, {});
  }, [products]);
  
  useEffect(() => {
    setHeart(createHeartState);
  }, [createHeartState]);
  

  const finalUrl = currentUrl.includes("query=")
  ? decodeURIComponent(currentUrl.split("query=")[1].replace(/\+/g, " "))
  : currentUrl;
  

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  return (
    <main className="flex flex-col gap-9 dynamic-padding">
        <SearchInfo
          finalProducts={finalProducts}
          products={products}
          typeClicked={typeClicked}
          status={status}
          setTypeClicked={setTypeClicked}
          setStatus={setStatus}
          finalFilters={finalFilters}
          setFinalFilters={setFinalFilters}
          openCategories={openCategories}
          setOpenCategories={setOpenCategories}
          setFinalProducts={setFinalProducts}
          colors={colors}
          finalUrl={finalUrl}
          collections={false}
          product={false}
        />
      {loading ? (
        <Loading number={12}/>
      ) : (
        <Products items={finalProducts} />
      )}
                        <NoProductResults setFinalFilters={setFinalFilters} finalFilters={finalFilters} ifStatement={(!loading && finalProducts.length === 0 && finalFilters.length > 0)}/>
    </main>
  );
};

export default Page;
