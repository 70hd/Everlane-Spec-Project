"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import EmailSignup from "./email-signup";
import Form from "./form";
import { useAuth } from "../context/authContext";
import { FORMS } from "../../data/forms";
import bcrypt from "bcryptjs";

const PopupModal = ({ delay = 15000, account, setStatus }) => {
  const { authData, setAuthData } = useAuth();
  const [formData, setFormData] = useState({
    username: authData.username,
    email: authData.email,
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    final: "",
  });

  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);

  const [opend, setOpend] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ username: "", email: "", password: "", final: "" });

    try {
      const payload = {
        authData, // used to find the account
        updateData: formData, // formData includes the new username, email, and password for verification
      };

      const response = await fetch("/api/updateAccount", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch (err) {
        console.warn("Invalid JSON returned:", text);
        throw new Error("Server returned invalid response.");
      }

      if (!response.ok) {
        setError((prev) => ({
          ...prev,
          final: data.error || "Something went wrong.",
        }));
        return;
      }
    } catch (err) {
      console.error("Client-side error:", err);
      setError((prev) => ({
        ...prev,
        final: err.message || "Unexpected error.",
      }));
    } finally {
      setLoading(false);
      const hashedPassword = await bcrypt.hash(formData.password, 10);
      setAuthData((prev) => ({
        ...prev,
        username: formData.username,
        email: formData.email,
        password: hashedPassword,
      }));

      setFormData((prev) => ({
        ...prev,
        username: authData.username,
        email: authData.email,
        password: "",
      }));
    }
  };

  useEffect(() => {
    const savedOpend = Cookies.get("opend");
    if (savedOpend) {
      setOpend(parseInt(savedOpend, 10) || 0);
    }
  }, []);

  useEffect(() => {
    if (opend >= 2) return;

    const timer = setTimeout(() => {
      setModal(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, opend]);

  const updateOpendCount = () => {
    const updated = opend + 1;
    setOpend(updated);
    Cookies.set("opend", updated.toString(), { expires: 2 });
  };

  const closeModal = () => {
    setModal(false);
    updateOpendCount();
  };

  if ((!modal || opend >= 1) && !account) return null;

  return (
    <section>
      {account ? (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
          <div className="w-fit md:w-[702px] h-fit flex flex-col p-12 gap-9 bg-white border border-black/25">
            <div className="border-b-black/50 border-b-[1px] py-3 flex justify-between">
              <h1>Account</h1>
              <button onClick={() => setStatus("")}>
                <Image
                  src="/close.svg"
                  width={20}
                  height={20}
                  alt="close icon"
                  className="min-w-[20px]"
                />
              </button>
            </div>

            <Form
              FORMS={FORMS}
              setLoading
              title={"Contact Details"}
              loading={loading}
              setFormData={setFormData}
              formData={formData}
              handleSubmit={handleSubmit}
              error={error}
              setError={setError}
              imageAlt={
                "Woman wearing a heather taupe cocoon coat, standing with hands in pockets."
              }
            />
          </div>
        </div>
      ) : (
        <div className="fixed top-0 right-0 z-40 max-w-[285px] md:max-w-[364px] h-screen flex flex-col pt-14 gap-6 p-12 bg-white border border-black/25">
          <div className="w-full flex justify-between items-start">
            <Image
              src="/logo.svg"
              width={165}
              height={19}
              alt="logo"
              className="max-w-[125px] md:min-w-[165px]"
            />
            <button onClick={closeModal}>
              <Image
                src="/close.svg"
                width={20}
                height={20}
                alt="close icon"
                className="min-w-[20px]"
              />
            </button>
          </div>
          <Image
            src="/popupImage.png"
            width={315}
            height={392}
            alt="Woman wearing tan pants and a dark brown coat over a black undershirt, leaning on her right leg."
          />

          <div className="flex gap-6 items-center">
            <div className="max-w-[315px] flex flex-col gap-6">
              <h2 className="sm:text-center ">
                Earn 10% <span className="text-[#FFC68A]">OFF</span> Your Next
                Purchase
              </h2>

              <EmailSignup
                col={true}
                cta={"submit"}
                route={"/api/newsletter"}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopupModal;
