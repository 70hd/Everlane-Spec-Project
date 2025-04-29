"use client";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import bcrypt from "bcryptjs";
import Image from "next/image";
import { useCart } from "../context/cartContext";
import Form from "../components/form";
import { FORMS } from "../../data/forms";
import SignUpForm from "./signupForm";

const Accounts = ({ isLogIn, setIsLogIn }) => {
  const { authData, setAuthData } = useAuth();
  const { cart, setCart } = useCart();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    final: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      const payload = isLogIn
        ? JSON.stringify({ ...formData, cart })
        : JSON.stringify(formData);
      const response = await fetch(
        `/api/${isLogIn ? "login" : "createAccount"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
        }
      );

      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }

      if (!response.ok) {
        setError((prev) => ({
          ...prev,
          final: data.error || "Something went wrong.",
        }));
        return;
      }

      if (isLogIn) {
        const HASHEDPASSWORD = await bcrypt.hash(data.user.password, 10);
        setAuthData({
          loggedIn: true,
          username: data.user.username,
          email: data.user.email,
          password: HASHEDPASSWORD,
          permission: data.user?.permission ?? "user",
          token: data.token,
        });
      } else {
        setIsLogIn(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setError((prev) => ({
        ...prev,
        final: "Something went wrong.",
      }));
    } finally {
      setLoading(false);
    }
  };
  ["username", "email", "password"];

  const IMAGE =
    "https://media.everlane.com/images/c_fill,w_1080,ar_4:5,q_auto:best:sensitive,dpr_2.0,f_auto/i/f45df1e4_95f9/womens-rewool-cocoon-coat-heather-taupe";
  const title = isLogIn ? "Log In" : "Create Account";
  const handleSuccess = async (formData) => {
    await handleSubmit(formData); // <-- submit it after success
  };

  return (
    <div className="dynamic-padding">
      <SignUpForm
        onSuccess={handleSuccess}
        FORMS={FORMS}
        setLoading={setLoading}
        title={title}
        loading={loading}
        setFormData={setFormData}
        imageSrc={IMAGE}
        formData={formData}
        isLogIn={isLogIn}
        showLogInInfo={true}
        error={error}
        setError={setError}
        setIsLogIn={setIsLogIn}
        imageAlt={
          "Woman wearing a heather taupe cocoon coat, standing with hands in pockets."
        }
      />
    </div>
  );
};

export default Accounts;
