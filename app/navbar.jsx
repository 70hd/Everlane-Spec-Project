"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useCart } from "./context/cartContext";
import Search from "./components/search";
import { useAuth } from "./context/authContext";
import useScreenWidth from "./components/screen-width";
import ModalUi from "./components/modal-ui";
import { motion } from "framer-motion";
import ShopModal from "./components/shop-modal";
import Dropdown from "./components/status-dropdown";
import PopupModal from "./components/popup-modal";
import AnimatedArrow from "./components/animated-arrow";

const Navbar = () => {
  const { authData, setAuthData } = useAuth();
  const { cart } = useCart();
  const [isCart, setIsCart] = useState([]);
  const [title, setTitle] = useState(
    "Casual Cool – Everyday Looks You’ll Love"
  );
  const screenWidth = useScreenWidth();
  const [hasMounted, setHasMounted] = useState(false);
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState();
  const [shopClicked, setShopClicked] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [status, setStatus] = useState("");

  const TITLES = [
    "Casual Cool – Everyday Looks You’ll Love",
    "Fresh Styles – Effortless Fashion Choices",
    "Comfort Meets Trend – Shop the Best Looks",
    "Relaxed Yet Stylish – Find Your Perfect Outfit",
    "On-the-Go Looks – Stay Stylish Every Day",
  ];

  useEffect(() => {
    if (status === "Log Out") {
      setAuthData({
        loggedIn: false,
        username: "",
        password: "",
        email: "",
        permissions: "",
      });
    }
  }, [status]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!authData?.loggedIn) return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/getCart?username=${encodeURIComponent(authData.username)}`
        );
        if (!response.ok) throw new Error(await response.text());
        const data = await response.json();
        setIsCart(data);
      } catch (error) {
        console.error("Cart fetch error:", error.message);
      }
    };
    fetchData();
  }, [authData]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitle((prev) => {
        const currentIndex = TITLES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % TITLES.length;
        return TITLES[nextIndex];
      });
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const ActiveCart = authData?.loggedIn ? isCart : cart;

  const Section = ({ text, collections }) => {
    return (
      <div
        className="h-fit flex flex-col custom-gap-3"
        onMouseLeave={() => setClicked()}
      >
        <div className="h-fit w-fit flex custom-gap-3 items-center">
          <h2>{text}</h2>
          <AnimatedArrow onClick={() => !shopClicked && setShopClicked((prev) => !prev)} isActive={clicked === text}/>

    
        </div>

        {clicked === text && (
          <div className="flex flex-col">
            {collections?.map((collection, index) => (
              <a key={index} href={`collections/${collection}`}>
                <p>{collection}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };
  const ALL_CATEGORIES_AND_FILTERS = [
    {
      category: "Home",
      link: "/home",
    },
    {
      category: "About Us",
      link: "/impact",
    },
    {
      category: "Shop",
      link: "/shop",
      collections: [
        "On Sale",
        "New Arrival",
        "Limited Availability",
        "Best Seller",
      ],
    },
    {
      category: "Sustainability",
      link: "/sustainability",
    },
    {
      category: "Search",
      link: "/search",
    },
    {
      category: "Favorites",
      link: "/favorites",
    },
    {
      category: "Contact",
      link: "/contact",
    },
    {
      button: "Account",
      link: "/account",
    },
  ];
  const Images = ({ url, link }) => (
    <a href={link} className="w-fit block m">
      <Image
        src={url}
        width={20}
        height={20}
        alt="shopping cart icon"
        className="min-w-[20px] "
      />
    </a>
  );


  return (
    <nav className="sticky top-0 z-40 w-full h-fit flex flex-col gap-0 bg-white text-black border-b border-black/25">
      <div className="w-full h-fit py-3 bg-black text-white text-sm font-normal items-center text-center">
        {hasMounted ? title : "Casual Cool – Everyday Looks You’ll Love"}
      </div>
      <div className="w-full dynamic-x-padding py-4 h-fit items-center lg:justify-between md:gap-[52px] flex justify-between custom-gap-3">
        {screenWidth < 1112 && (
          <Image
            src="/filters-icon.svg"
            width={20}
            height={20}
            onClick={() => setModal((prev) => !prev)}
            alt="search icon"
            className="min-w-[20px]"
          />
        )}
        {screenWidth > 1112 && (
          <ul className="w-fit h-fit flex custom-gap-6">
            {["Home", "Shop", "About Us", "Sustainability", "Contact"].map(
              (text, index) => (
                <li className={`min-w-fit flex custom-gap-3`} key={index}>
                  {text !== "Shop" ? (
                    <a
                      href={`/${
                        text === "Home"
                          ? ""
                          : text === "About Us" ? "impact":text.toLowerCase().replace(/\s+/g, "")
                      }`}
                    >
                      <p>
                      {text}
                      </p>
                    </a>
                  ) : (
                    <ShopModal />
                  )}
                  {/* {text === "Shop" &&    <Image src="/right-arrow.svg" width={20} height={20} alt="right arrow" className="w-full" />} */}
                </li>
              )
            )}
          </ul>
        )}
        <a href="/" className="w-full min-w-[64px] max-w-[192px]">
          <Image
            src="/logo.svg"
            width={285}
            height={31}
            alt="everlanes logo"
            className="w-full"
          />
        </a>
        <div className=" w-fit h-fit flex custom-gap-9 items-center">
          {screenWidth > 1112 && (
            <div className="relative w-[285px]">
              <Search link={"search"} />
            </div>
          )}
          <div className="relative flex w-fit custom-gap-3 items-center">
            {/* {screenWidth < 1112 && (
              <Images url={"/search.svg"} link={"/search"} />
            )} */}
            {hasMounted && authData.loggedIn ? (
              <div className="relative">
                <Image
                  src="/user.svg"
                  width={20}
                  height={20}
                  alt="user icon"
                  className="min-w-[20px] min-h-[20px]"
                  onClick={() => setDropDown((prev) => !prev)}
                />
                {dropDown && (
                  <Dropdown
                    accountOptions={["Account", "Log Out"]}
                    typeClicked={dropDown}
                    setTypeClicked={setDropDown}
                    setAccountStatus={setStatus}
                  />
                )}
              </div>
            ) : (
              screenWidth > 1112 && <Images url={"/user.svg"} link={"/account"} />
            )}

            <Images url={"/heart.svg"} link={"/favorites"} />
            <div className="relative">
              <Images url="/shopping-cart.svg" link="/checkout" />
              {hasMounted && ActiveCart?.length > 0 && (
                <span className="absolute -bottom-[-12px] -right-[8px] bg-red-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {ActiveCart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {status === "Account" && (
        <PopupModal setStatus={setStatus} account={true} />
      )}
      {modal && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={() => setModal(false)}
        />
      )}
      <ModalUi
        value={-1}
        modal={modal}
        setModal={setModal}
        categoriesAndFilters={ALL_CATEGORIES_AND_FILTERS}
        logo={true}
        Section={Section}
        shopClicked={shopClicked}
        setShopClicked={setShopClicked}
      />
    </nav>
  );
};

export default Navbar;
