import Image from "next/image";
import React, { useState, useEffect } from "react";
import ShopUi from "./shop-modal-ui";
import ModalPortal from "./shop-modal-portal";

const ShopModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <section className="w-fit h-fit flex justify-between">
            
      <button
        className="w-fit h-fit flex gap-[6px] items-center justify-center hover:cursor-pointer hover:underline"
        aria-label="Open filters modal"
        onMouseEnter={() => setModal((prev) => !prev)}
      >
        <p>Shop</p>
      </button>

      <ModalPortal>
      {modal && <div
          className="fixed inset-0 bg-black opacity-50 z-0"
          onClick={() => setModal(false)}
        />}
        <ShopUi modal={modal} setModal={setModal} canScroll={true} />
        <div className="w-full h-fit flex gap-9"></div>
        
      </ModalPortal>
    </section>
  );
};

export default ShopModal;
