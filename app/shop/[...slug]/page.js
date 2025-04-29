"use client";
import React, { useEffect, useMemo, useState } from "react";
import Products from "../../components/product";
import useFetchProducts from "../../apiFetches/products";
import SearchInfo from "../../components/search-info";
import Loading from "../../components/loading";
import CollectionsImage from "../../components/collections-image";
import Custom404 from "../../not-found";
import Fuse from "fuse.js";
import NoProductResults from "../../components/no-product-results"

const Page = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [status, setStatus] = useState("All Products");
  const [typeClicked, setTypeClicked] = useState(false);
  const [openCategories, setOpenCategories] = useState([]);
  const [finalFilters, setFinalFilters] = useState([]);
  const [finalProducts, setFinalProducts] = useState([]);
  const [heart, setHeart] = useState({});
  const [filteredBySearch, setFilteredBySearch] = useState([]);
  const [finalFinalProducts, setFinalFinalProducts] = useState([])

  const { products, colors, loading } = useFetchProducts();
  const domain = window.location.origin + "/";
  const LOCALHOST_PREFIX = `${domain}shop/`;


  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const finalUrl = useMemo(() => {
    return currentUrl.includes("query=")
      ? decodeURIComponent(currentUrl.split("query=")[1].replace(/\+/g, " "))
      : currentUrl;
  }, [currentUrl]);

  const cleanedUrl = finalUrl.replace(LOCALHOST_PREFIX, "").replace("%20", " ");
  useEffect(() => {
    if(cleanedUrl === "men" || cleanedUrl === "women"){
      const capitalized = cleanedUrl.charAt(0).toUpperCase() + cleanedUrl.slice(1);
      const result = `All ${capitalized}s Clothing`;
      setStatus(result);
    }
    
  }, [cleanedUrl]);
  const urlSegments = cleanedUrl.split("/").filter(Boolean); // ['men', 'scarf']
  const gender = urlSegments[0]?.toUpperCase();
  const searchKeyword = urlSegments[1]?.toLowerCase() || "";

  const link = decodeURIComponent(finalUrl.replace(LOCALHOST_PREFIX, ""));

  useEffect(() => {
    const createHeartState = products?.reduce((acc, item) => {
      acc[item.id] = { isHearted: false };
      return acc;
    }, {});
    setHeart(createHeartState);
  }, [products]);

  const genderProducts = useMemo(() => {
    return products?.filter((item) => item.gender === gender) || [];
  }, [products, gender]);

  useEffect(() => {
    if (!searchKeyword || genderProducts.length === 0) {
      setFilteredBySearch(genderProducts);
      return;
    }

    const fuse = new Fuse(genderProducts, {
      includeScore: true,
      threshold: 0.4,
      keys: ["title", "description", "status", "productCare", "productDetails"],
    });

    const results = fuse.search(searchKeyword);
    const matchedProducts = results.map((result) => result.item);

    setFilteredBySearch(matchedProducts);
  }, [searchKeyword, genderProducts]);

  const displayProducts = useMemo(() => {
    if (status === "All Products" || status === "All Womens Clothing" || status === "All Mens Clothing") return filteredBySearch;

    const fuse = new Fuse(filteredBySearch, {
      includeScore: true,
      threshold: 0.4,
      keys: ["title", "description", "status", "productCare", "productDetails"],
    });
  

    const results = fuse.search(status);
    return results.map((result) => result.item);
  }, [filteredBySearch, status]);
  const productsRender = finalFilters.length >= 1 ? finalFinalProducts : displayProducts


  return (
    <main className="flex flex-col  dynamic-padding">

      {!loading && productsRender.length === 0 && finalFilters.length === 0 ? (
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
            product={true}
            link={link}
            noDropdown={cleanedUrl.includes("/")}
            displayProducts={displayProducts}
            setFinalFinalProducts={setFinalFinalProducts}
          />
          {loading ? (
            <Loading number={12} />
          ) : (
            <Products items={productsRender} />
          )}
                  <NoProductResults setFinalFilters={setFinalFilters} finalFilters={finalFilters} ifStatement={(!loading && productsRender.length === 0 && finalFilters.length > 0)}/>
        </section>
      )}
    </main>
  );
};

export default Page;
