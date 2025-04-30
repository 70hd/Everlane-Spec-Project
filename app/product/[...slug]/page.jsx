"use client";
import Accordian from "../../components/accordian";
import Products from "../../components/product";
import { useCart } from "../../context/cartContext";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import ProductImages from "../../components/productImages";
import ProductInfo from "../../components/productInfo";
import ProductChangeableInfo from "../../components/productChangeableInfo";
import useFetchProducts from "../../apiFetches/products";
import ModalUi from "../../components/modal-ui";

const ProductsPage = ({ params }) => {
  const { products, colors, loading, error } = useFetchProducts();
  const { slug } = React.use(params);
  const [quantity, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const { authData, setAuthData } = useAuth();
  const [showHearted, setShowHearted] = useState(false);

  const newArrivals = products.filter(
    (product) => product.status === "New Arrival"
  );
  const { cart, setCart } = useCart();
  const [isHearted, setIsHearted] = useState();

  const finalUrl = currentUrl.includes("query=")
    ? decodeURIComponent(currentUrl.split("query=")[1].replace(/\+/g, " "))
    : currentUrl;

  const ALL_CATEGORIES_AND_FILTERS = [
    {
      cart: true,
    },
  ];

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const decodedSlug = decodeURIComponent(slug);
  const product = products.find((product) => product.title === decodedSlug);
  const color = colors.filter((color) => color.productId === product?.id);
  const [activeColor, setActiveColor] = useState("");
  const activeColorVariable = color.length > 0 ? color[0].colorName : "";
  const displayedColor = activeColor || activeColorVariable;
  const [size, setSize] = useState("");
  const [activeColorHex, setActiveColorHex] = useState();
  const displayedHex = activeColorHex || color[0]?.colorName;
  const ORIGINAL_SALE = 0.8;

  const INFO_CATEGORIES = [
    {
      Category: "Shipping Policy",
      Description:
        "Free standard shipping on orders $50+ and free 60-day returns for Everlane Members. Learn more. Return policy exclusions apply.",
      Id: 1,
    },
    {
      Category: "Product Details",
      Description: product?.productDetails,
      Id: 2,
    },
    { Category: "Product Care", Description: product?.productCare, Id: 3 },
  ];
  useEffect(() => {
    if (product && product.size && product.size.length > 0) {
      setSize(product.size[0]);
    }
  }, [product]);
  useEffect(() => {
    if (color?.length > 0 && color[0]?.colorHex) {
      setActiveColorHex(color[0].colorHex);
    }
  }, [product]);

  useEffect(() => {
    if (color?.length > 0 && color[0]?.colorName) {
      setActiveColor(color[0].colorName);
    }
  }, [product]);
  const checkIfHearted = async () => {
    if (!id || !authData?.email || !authData?.username) return;

    try {
      const response = await fetch(
        `/api/getHeart?productId=${encodeURIComponent(
          id
        )}&email=${encodeURIComponent(
          authData.email
        )}&username=${encodeURIComponent(authData.username)}`
      );

      const data = await response.json();

      if (response.ok) {
        setIsHearted(data.isHearted);
      } else {
        setError(data.error || "Unknown error occurred");
      }
    } catch (err) {
      console.error("Failed to fetch heart status:", err);
      setError("Failed to fetch data");
    }
  };
  useEffect(() => {
    if (authData?.email && authData?.username) {
      checkIfHearted();
    }
  }, [authData?.email, authData?.username, product?.id]);

  useEffect(() => {
    if (authData.loggedIn === false) {
      setShowHearted(false);
    } else {
      setShowHearted(true);
    }
  }, []);
  const sale = product?.price * ORIGINAL_SALE;
  const id = product?.id;
  return (
    <main className="w-full h-fit flex flex-col custom-gap-9">
      {product ? (
        <div className="w-full flex md:flex-row flex-col gap-2 md:custom-gap-9 h-fit relative dynamic-x-padding">
          <ProductImages product={product} />
          <div className="sticky top-[100px] md:w-[606px] w-full sm:h-[840px]  flex flex-col justify-center custom-gap-6">
            <ProductInfo
              setIsHearted={setIsHearted}
              isHearted={isHearted}
              authData={authData}
              product={product}
              showHearted={showHearted}
              loading={loading}
              color={color}
              displayedColor={displayedColor}
              sale={sale}
              setActiveColor={setActiveColor}
              setActiveColorHex={setActiveColorHex}
            />
            <ProductChangeableInfo
              color={color}
              displayedColor={displayedColor}
              setActiveColor={setActiveColor}
              activeColor={activeColor}
              setActiveColorHex={setActiveColorHex}
              activeColorHex={activeColorHex}
              product={product}
              setSize={setSize}
              setQuantity={setQuantity}
              size={size}
              displayedHex={displayedHex}
              quantity={quantity}
              authData={authData}
              ORIGINAL_SALE={ORIGINAL_SALE}
              setModal={setModal}
              setCart={setCart}
              sale={sale}
              inventory={product.inventory}
            />
            <Accordian items={INFO_CATEGORIES} />
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex md:flex-row flex-col dynamic-x-padding custom-gap-9 pt-20">
          <div className="max-w-[606px] md:min-w-[606px] max-h-[800px] w-full h-full skeleton-text skeleton" />
          <div className="max-w-[606px] md:min-w-[606px] flex flex-col custom-gap-9 w-full h-full">
            <h1>
              {finalUrl
                .replace("everlane-spec-project.vercel.app/", "")
                .replace(/%20/g, " ")}
            </h1>

            <div className="max-w-[606px] md:min-w-[606px] max-h-[48px] w-full h-full skeleton-text skeleton" />
          </div>
        </div>
      )}
      <div className="flex flex-col custom-gap-3 dynamic-padding">
        <h2>More New Arrivals.</h2>
        <Products items={newArrivals} />
      </div>
      <ModalUi
        value={1}
        modal={modal}
        setModal={setModal}
        categoriesAndFilters={ALL_CATEGORIES_AND_FILTERS}
        canScroll={true}
        logo={true}
      />
    </main>
  );
};

export default ProductsPage;
