"use client";
import React from "react";
import EmailSignup from "./components/email-signup";

const Footer = () => {
  const LINKS = [
    { text: "Home", link: "/" },
    { text: "Limited Availability Collection", link: "collections/Limited Availability" },
    { text: "Exclusive Collection", link: "collections/exclusive" },
    { text: "Best Seller Collection", link: "collections/best seller" },
    { text: "Impact", link: "/impact" },
    { text: "Sustainability", link: "sustainability" },
    { text: "Contact Us", link: "/contact" },
    { text: "Faq", link: "/faq" },
    { text: "Returns & Exchanges", link: "/faq?query=return and exchanges" },
    { text: "Shipping & Delivery", link: "/faq?query=shipping and delivery" },
    { text: "Account", link: "/account" },
    { text: "Cart", link: "/checkout" },
    { text: "Favorites", link: "/favorites" },
    { text: "Search", link: "/search?query=" },
  ];

  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="w-full dynamic-x-padding">
        <div className="w-full h-fit justify-between flex flex-wrap gap-9 dynamic-padding bg-[#FFC68A] items-center">
         
          <ul className="w-fit h-fit flex flex-col gap-3">
          <h2>Quick Links</h2>
            {LINKS.map((item, index) => {
              return (
                <li key={index}>
                <a href={item.link}>
                  {item.text}
                </a>
                </li>
              );
            })}
          </ul>
          <div className="w-[356px] h-fit flex flex-col gap-6">
            <h1>Subscribe and let's stay connected!</h1>
            <EmailSignup cta={"Subscribe"} col={true} route={"/api/newsletter"}/>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-4 items-center justify-center bg-black text-white text-center">
        <p className="h-fit w-full">© 2025 TrendSphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
