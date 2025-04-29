import React, { useCallback, useState } from "react";
import Input from "./input";
import Image from "next/image";

// TODO FIX INPUTS

const Form = ({
  FORMS,
  handleSubmit,
  imageAlt,
  title,
  loading,
  setLoading,
  showLogInInfo,
  isLogIn,
  setIsLogIn,
  imageSrc,
  formData,
  setFormData,
  error,
  setError,
  subTitle,
}) => {
  const handleChange = useCallback(e => {
    const {name, value } = e.target; 
    setFormData(prev => ({ ...prev, [name]: value}))
  }, [])

  const INVALID_CHARS = [
    " ",
    "(",
    ")",
    "<",
    ">",
    "[",
    "]",
    ":",
    ";",
    ",",
    "\\",
    '"',
    "'",
    "/",
    "?",
    "=",
    "{",
    "}",
    "|",
    "*",
    "&",
    "%",
    "$",
    "#",
    "!",
    "~",
    "`",
  ];

  const HandleFirstSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "username",
      "lastName",
      "email",
      "password",
    ];

    requiredFields.forEach((field) => {
      if (formData[field]?.trim() === "") {
        newErrors[field] = `${field} is required`;
      }
    });

    if (
      formData.email &&
      (!formData.email.includes("@") ||
        !formData.email.includes(".") ||
        formData.email.length < 6 ||
        INVALID_CHARS.some((char) => formData.email.includes(char)))
    ) {
      newErrors.email = "Email must be valid";
    }

    if (
      formData.firstName &&
      INVALID_CHARS.some((char) => formData.firstName.includes(char))
    ) {
      newErrors.firstName = "First name must only include letters";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(e);
    }
  };

  const InputField = ({ field }) => {
    return (
      <div className="w-full" key={field.name}>
        <Input
          type={field.type}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name]} // Ensure this is coming from formData
          onChange={handleChange}
          version={field.name}
          label={field.label}
          error={error[field.name]}
        />
      </div>
    );
  };

  const FormSection = ({ fields, start, end }) => (
    <div
      className={`flex ${
        start === 0 && end === 2 ? "flex-row gap-6" : "flex-col gap-6"
      }  w-full`}
    >
      {fields.slice(start, end).map((field, id) => (
        <InputField key={start + id} id={start + id} field={field} />
      ))}
    </div>
  );

  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Form Container */}
      <div className="w-full  md:flex-1 flex flex-col gap-6">
        <form
          noValidate
          onSubmit={HandleFirstSubmit}
          className="w-full flex flex-col gap-9"
        >
          <div className="text-center flex flex-col gap-4">
            <h1>{title}</h1>
            {subTitle && <p>{subTitle}</p>}
            {error.final && <p className="text-red-500">{error.final}</p>}
          </div>

          <div className="w-full flex flex-col gap-6">
            <FormSection fields={FORMS} start={0} end={2} />
            <FormSection fields={FORMS} start={2} end={FORMS.length} />
          </div>

          <button
            type="submit"
            className="w-full p-3 border border-black bg-black hover:bg-black/75 text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {showLogInInfo && (
          <p className="text-center">
            {isLogIn ? (
              <>
                Don&apos;t have an account?
                <span
                  onClick={() => setIsLogIn(false)}
                  className="underline pl-1 text-blue-500 cursor-pointer"
                >
                  Create one
                </span>
              </>
            ) : (
              <>
                Already have an account?
                <span
                  onClick={() => setIsLogIn(true)}
                  className="underline pl-1 text-blue-500 cursor-pointer"
                >
                  Log In
                </span>
              </>
            )}
          </p>
        )}
      </div>

      {/* Image Section */}
      {imageSrc && (
        <div className="w-full md:flex-1">
          <Image
            src={imageSrc}
            width={606}
            height={606}
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Form;
