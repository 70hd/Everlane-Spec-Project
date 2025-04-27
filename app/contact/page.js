"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import Form from "../components/form";
import Image from "next/image";
import { CONTACT_TYPES } from "../../data/contactTypes";
import ContactMethod from "../components/contact-method";
import SignUpForm from "../components/signupForm"

const Page = () => {
  const { authData, setAuthData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
    final: "",
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (authData.loggedIn) {
      setFormData((prev) => ({ ...prev, email: authData.email }));
    }
  }, []);
  
  const handleSuccess = async (data) => {
    console.log("user data: ", data); 
  }

  const createUser = async () => {
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.message
    ) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/contactForm", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = {};
      }
      if (!response.ok) {
        setError((prev) => {
          return {
            ...prev,
            final: data.error || "Something went wrong.",
          };
        });
      } else {
        console.log("Message submitted successfully");
      }
    } catch (error) {
      setError((prev) => {
        return {
          ...prev,
          final: error,
        };
      });
    } finally {
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
  };
  const FORMS = [
    { label: "First Name", placeholder:"Joe",name: "firstName", type: "text" },
    { label: "Last Name", placeholder:"Ford",name: "lastName", type: "text" },
    { label: "Email", placeholder:"Joeford@gmail.com",name: "email", type: "email" },
    { label: "Message",placeholder:"I wanted to...", name: "message", type: "text" },
  ];

  return (
    <main className="w-full  items-center dynamic-padding justify-center h-fit flex flex-col gap-9">
      <div className="w-full max-w-[606px]">
        {/* <Form
          FORMS={FORMS}
          title={"How to contact Everlane Client Services"}
          subTitle={
            "Choose your preferred method of contact and connect with us"
          }
          loading={loading}
          formData={formData}
          handleSubmit={handleSubmit}
          setFormData={setFormData}
          error={error}
          setError={setError}
          setLoading
        /> */}
         <SignUpForm onSuccess={handleSuccess}/>
      </div>
      <div className="w-full flex gap-9 dynamic-y-padding">
        <ContactMethod data={CONTACT_TYPES}/>
       
      </div>
    </main>
  );
};

export default Page;
