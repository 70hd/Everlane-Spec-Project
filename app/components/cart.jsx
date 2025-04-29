"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "../foundation/primary-button";
import { useAuth } from "../context/authContext";
import { useCart } from "../context/cartContext";
import Loading from "./loading";

const Cart = ({ modal }) => {
  const [isCart, setIsCart] = useState([]);
  const [couponValue, setCouponValue] = useState("");
  const [isSuccessfulCoupon, setIsSuccessfulCoupon] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const [loading, setLoading] = useState(true);
  const { authData } = useAuth();
  const { cart, setCart } = useCart();
  const COUPONS = [
    { coupon: "StPatricks", value: 0.8 },
    { coupon: "MrMullaly", value: 0.75 },
  ];
  const activeCart = authData.loggedIn? isCart: cart
  const coupon = COUPONS.find((item) => item.coupon === couponValue);
  const ESTIMATED_SHIPPING = 0;

  const fetchData = async () => {
    if (!authData.loggedIn) return;
    try {
      const response = await fetch(
        `/api/getCart?username=${encodeURIComponent(authData.username)}`
      );
      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setIsCart(data);
      setLoading(false);
    } catch (error) {
      console.error("Cart fetch error:", error.message);
    }
  };
  useEffect(() => {
    if (authData?.username) fetchData();
  }, [authData?.username]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
   if(!authData.loggedIn){
    setLoading(false)
   }
  },[])

  useEffect(() => {
    fetchData();
  }, [modal]);

  useEffect(() => {
    const newSubTotal = activeCart?.reduce(
      (acc, item) => acc + (authData.loggedIn ? item.product.price : item.price)* item.quantity,
      0
    );
    setSubTotal(newSubTotal);
    setSale(newSubTotal * 0.8);
  }, [activeCart]);

  const updateQuantity = async ({
    id,
    color,
    size,
    colorHex,
    value,
    title,
  }) => {
    fetchData();
    if (!authData.loggedIn) {
      setCart((prev) => {
        const updatedCart = prev.map((item) => {
          if (
            item.title === title &&
            item.size === size &&
            item.selectedColorName === colorHex &&
            item.quantity > 0
          ) {
            return { ...item, quantity: item.quantity + value };
          }
          return item;
        });

        const finalCart = updatedCart.filter(
          (item) =>
            !(
              item.title === title &&
              item.size === size &&
              item.selectedColorName === colorHex &&
              item.quantity === 0
            )
        );

        return finalCart;
      });
    } else {
      
    try {
      fetchData();
      const response = await fetch(`/api/ChangeQuantity`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          color,
          size,
          colorHex,
          username: authData.username,
          value,
        }),
      });

      if (!response.ok) throw new Error(await response.text());
    } catch (error) {
      console.error("Quantity update failed:", error.message);
      fetchData(); // fallback
    }}
  };

  const deleteProduct = async ({ id, color, size, title }) => {
    if (!authData.loggedIn) {
      // add delting animation
      setCart((prev) => {
        const finalCart = prev.filter((item) => {
          return !(
            item.title === title &&
            item.size === size &&
            item.selectedColor === color
          );
        });
        return finalCart;
      });
      return;
    }

    try {
      const response = await fetch(`/api/DeleteProduct`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          color,
          size,
          username: authData.username,
          value: 0,
        }),
      });
      fetchData();
      if (!response.ok) throw new Error(await response.text());
    } catch (error) {
      console.error("Delete failed:", error.message);
      fetchData(); // fallback
    }
  };

  const onChangeCoupon = (e) => {
    setCouponValue(e.target.value);
    setIsSuccessfulCoupon(null);
  };

  const applyCoupon = () => {
    setIsSuccessfulCoupon(COUPONS.some((c) => c.coupon === couponValue));
  };
  const Carted = authData.loggedIn ? isCart : cart;
  if (loading) {
    return (
        <Loading number={4} col={true}/>
    );
  }

  if (Carted?.length === 0 && !loading) {
    return (
      <div className="w-full items-center justify-center h-80">
        <h1 className="text-center h-full">There are no items in your cart</h1>
      </div>
    );
  }
  const ToggleUpdateQuantity = ({ cart, value }) => {
    updateQuantity({
      id: cart.productId,
      color: cart.selectedColor,
      size: cart.size,
      colorHex: cart.selectedColorName,
      value,
      title: cart.title,
    });
  };

  const ChangeQuantityImage = ({ cart, src, alt, value }) => (
    <Image
      src={src}
      width={20}
      height={20}
      alt={alt}
      onClick={() => ToggleUpdateQuantity({ cart, value })}
      className="cursor-pointer min-w-[20px]"
    />
  );

  const PriceDisplay = ({ title, equation }) => {
    return (
      <div className="flex justify-between ">
        <p>{title}</p>
        <p>
          {equation !== "Free" && "$"}
          {equation}
        </p>
      </div>
    );
  };

  return (
    <section
      className={`sticky ${
        modal ? "w-fit" : "md:w-[606px] w-full"
      } h-fit flex flex-col gap-9 dynamic-y-padding`}
    >
      <div className="w-full flex justify-between">
        <h2>Cart({Carted?.length})</h2>
        {/* {!modal && (
          <Image src="/shopping-cart.svg" width={20} height={20} alt="shopping cart icon" />
        )} */}
      </div>

      {Carted?.map((cart, index) => {
        const id = authData.loggedIn ? cart.product.id : index;
        const title = authData.loggedIn ? cart.product.title : cart.title;
        const image = authData.loggedIn ? cart.product.images[0] : cart.image;
        const price = authData.loggedIn ? cart.product.price : cart.price;
        return (
          <div className="w-full md:h-[392px] h-fit flex md:flex-row flex-col" key={index}>
            <a href={`/product/${title}`}>
              <Image
                src={image}
                width={285}
                height={392}
                alt="product"
                className="w-full md:min-w-[285px] min-h-[392px]"
              />
            </a>

            <div className="flex flex-col gap-3 justify-between p-3 w-full">
              <div className="flex gap-3 items-start w-full ">
                <a href={`/product/${title}`} className="w-full flex flex-col gap-3">
                <p className="md:hidden block text-red-600">(20% Off)</p>
                    <h2>{title}</h2>
                    <p className="text-gray-800">
                      {cart.size} | {cart.selectedColor}
                    </p>
                </a>
                {!modal && (
                  <Image
                    src="/trash.svg"
                    width={20}
                    height={20}
                    alt="trash icon"
                    onClick={() =>
                      deleteProduct({
                        id,
                        color: cart.selectedColor,
                        size: cart.size,
                        // colorHex: selectedColorName,
                        title: cart.title,
                      })
                    }
                    className="cursor-pointer min-w-[20px]"
                  />
                )}
              </div>

              <div className="flex  flex-col gap-3">
              <p className="hidden md:block text-red-600">(20% Off)</p>
                <div className="flex justify-between w-[134px]">
                  <p>${price}</p>
                  <p className=" text-gray-800">${(price * 0.8).toFixed(2)}</p>
                </div>

                <div className="flex gap-[6px] p-3 border border-black w-fit">
                  <ChangeQuantityImage
                    src={"/minus.svg"}
                    alt={"minus icon"}
                    cart={cart}
                    value={-1}
                  />
                  <p>{cart.quantity}</p>
                  <ChangeQuantityImage
                    src={"/plus.svg"}
                    alt={"plus icon"}
                    cart={cart}
                    value={1}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {!modal && (
        <div className="flex flex-col gap-3 w-full">
          <div className="flex md:flex-row flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Enter Coupon"
              onChange={onChangeCoupon}
              value={couponValue}
              className="w-full  h-[48px] p-3 border focus:outline-none"
            />
            <button
              onClick={applyCoupon}
              className="w-full p-3 text-white bg-black hover:bg-black/75"
            >
              Apply
            </button>
          </div>

          {couponValue &&
            (isSuccessfulCoupon ? (
              <p className="text-gray-800">
                Congrats! Coupon{" "}
                <span className="text-black">{couponValue}</span> (
                {Math.round((1 - coupon?.value) * 100)}%) applied successfully.
              </p>
            ) : (
              isSuccessfulCoupon === false && (
                <p className="text-red-500/50">
                  Coupon <span className="text-red-500">{couponValue}</span> is
                  invalid.
                </p>
              )
            ))}

          <div className="border-t text-gray-800 flex w-full flex-col gap-3 py-4">
            {[
              { title: "Subtotal", equation: subTotal.toFixed(2) },
              { title: "Sale", equation: (sale - subTotal).toFixed(2) },
              {
                title: "Estimated Shipping",
                equation:
                  ESTIMATED_SHIPPING === 0 ? "Free" : `$${ESTIMATED_SHIPPING}`,
              },
              {
                title: "Total Price",
                equation: Math.round(
                  (sale + ESTIMATED_SHIPPING) * (coupon?.value || 1)
                ),
              },
            ].map((item, index) => (
              <PriceDisplay
                key={index}
                title={item.title}
                equation={item.equation}
              />
            ))}
          </div>
        </div>
      )}

      {modal && <PrimaryButton text="Checkout" href="/checkout" />}
    </section>
  );
};

export default Cart;
