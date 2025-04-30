import Image from "next/image";
import React from "react";

const ProductInfo = ({
  setIsHearted,
  isHearted,
  authData,
  product,
  showHearted,
  loading,
  sale,
}) => {
  const handleSubmit = async () => {
    try {
      if (!authData || !authData.email) {
        console.error("User is not authenticated.");
        return;
      }

      // Optimistic update: assume the heart status changes immediately
      setIsHearted((prev) => !prev);

      const response = await fetch("/api/heart", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          email: authData.email,
          username: authData.username,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data.error || "Something went wrong");
        setIsHearted((prev) => !prev); // Revert the optimistic update if needed
      }
    } catch (error) {
      console.error("Error updating heart:", error);
      setIsHearted((prev) => !prev); // Revert the optimistic update if needed
    }
  };
  return (
    <section className="w-full h-fit flex flex-col justify-center custom-gap-6">
      <div className="w-full h-fit flex flex-col custom-gap-3 ">
        <div className="flex w-full justify-between">
          <p>{product?.status}</p>
          {showHearted && !loading ? (
            <Image
              src={isHearted ? "/red-heart.svg" : "/heart.svg"}
              onClick={async () => {
                await handleSubmit();
              }}
              alt="heart icon"
              width={20}
              height={22.4}
              className="min-w-[20px]"
            />
          ) : null}
        </div>

        <h1>{product?.title}</h1>
        <div className="w-fit flex custom-gap-3 items-center justify-start flex-wrap">
          <div className="flex  gap-[3px]">
            {["1", "2", "3", "4", "5"].map((index) => {
              return (
                <Image
                  src={"/star-filled.svg"}
                  width={20}
                  height={20}
                  alt="star icon"
                  className="min-w-[20px]"
                  key={index}
                />
              );
            })}
          </div>
          <p>(2443 Reviews) </p>
        </div>
      </div>
      <div className="w-[136px] h-fit flex justify-between">
        <p>${sale}</p>
        <p className=" text-gray-800">${product?.price}</p>
      </div>
      <p className="max-w-[392px] w-full">{product?.description}</p>
    </section>
  );
};

export default ProductInfo;
