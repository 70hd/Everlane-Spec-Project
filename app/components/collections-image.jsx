import React from "react";
import { SHOP_OPTIONS } from "../../data/shop-options";

const CollectionsImage = ({ LOCALHOST_PREFIX, finalUrl }) => {
  const BACKGROUND_IMAGE_URL =
    "https://media.everlane.com/images/c_fill,w_828,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/4d5ab00b_8430/womens-cheeky-relaxed-straight-jean-vintage-mid";
    const url = finalUrl.includes("shop") ? finalUrl
    .replace(LOCALHOST_PREFIX, "")
    .replace(/%20/g, " ")
    .replace(/\//g, " ")
    .split(" ")
    .map((word) => word + "s")
    .join(" ") : finalUrl
    .replace(LOCALHOST_PREFIX, "")
    .replace(/%20/g, " ")
    .replace(/\//g, " ")

    const collectionsLinks = SHOP_OPTIONS.find(option => option.type === "Collections")?.links || [];
    const descriptionItem = collectionsLinks.find(item => item.text?.toLowerCase() === url?.toLowerCase());
    

  return (
    <section
      className="w-full h-[285px] p-3 items-start justify-start bg-cover bg-center"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
    >
      <div className="md:w-[392px] w-full flex flex-col custom-gap-6">
        <h1 className="text-transform: capitalize">
          {url}
        </h1>
        {finalUrl.includes("collections") && <p className="hidden md:block">
          {descriptionItem?.description}
        </p>}
      </div>
    </section>
  );
};

export default CollectionsImage;
