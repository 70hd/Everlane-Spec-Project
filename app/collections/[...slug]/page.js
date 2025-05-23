"use client";
import React, { useEffect, useMemo, useState } from "react";
import Products from "../../components/product";
import useFetchProducts from "../../apiFetches/products";
import SearchInfo from "../../components/search-info";
import Loading from "../../components/loading";
import CollectionsImage from "../../components/collections-image";
import Custom404 from "../../not-found";
import NoProductResults from "../../components/no-product-results";

const Page = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const { products, colors, loading } = useFetchProducts();
  const [finalProducts, setFinalProducts] = useState([]);
  const [finalFilters, setFinalFilters] = useState([]);
  const [openCategories, setOpenCategories] = useState([]);
  const [typeClicked, setTypeClicked] = useState(false);
  const [status, setStatus] = useState("All Products");
  const [heart, setHeart] = useState();
  const [finalRender, setFinalRender] = useState(false);
  const createHeartState = useMemo(() => {
    return products?.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: { isHearted: false },
      };
    }, {});
  }, [products]);
  const LOCALHOST_PREFIX = "http://localhost:3000/collections/";

  useEffect(() => {
    setHeart(createHeartState);
  }, [createHeartState]);

  const finalUrl = currentUrl.includes("query=")
    ? decodeURIComponent(currentUrl.split("query=")[1].replace(/\+/g, " "))
    : currentUrl;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const finalStatus = finalUrl
    .replace(LOCALHOST_PREFIX, "")
    .replace("%20", " ");

  useEffect(() => {
    if (products.length > 1) {
      setFinalRender(true);
    }
  }, [finalProducts]);

  return (
    <main className="flex flex-col dynamic-padding">
      {products.length > 1 &&
      finalRender &&
      finalProducts.length === 0 &&
      finalFilters.length === 0 ? (
        <Custom404 />
      ) : (
        <section>
          <CollectionsImage
            LOCALHOST_PREFIX={LOCALHOST_PREFIX}
            finalUrl={finalUrl}
          />

          <SearchInfo
            finalProducts={finalProducts}
            products={products}
            typeClicked={typeClicked}
            status={finalStatus}
            setTypeClicked={setTypeClicked}
            setStatus={setStatus}
            finalFilters={finalFilters}
            setFinalFilters={setFinalFilters}
            openCategories={openCategories}
            setOpenCategories={setOpenCategories}
            setFinalProducts={setFinalProducts}
            colors={colors}
            finalUrl={finalUrl}
            collections={true}
          />
          {loading ? (
            <Loading number={12} />
          ) : (
            <Products items={finalProducts} />
          )}
        </section>
      )}
      <NoProductResults
        setFinalFilters={setFinalFilters}
        finalFilters={finalFilters}
        ifStatement={
          !loading && finalProducts.length === 0 && finalFilters.length > 0
        }
      />
    </main>
  );
};

export default Page;
