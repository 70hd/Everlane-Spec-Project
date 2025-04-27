"use client";
import { useState } from "react";

export default function SignUpForm({ onSuccess }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSuccess?.(values);
    }
  };

  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full  md:flex-1 flex flex-col gap-6">
        <form
        //   onSubmit={HandleFirstSubmit}
          className="w-full flex flex-col gap-9"
        >
          {/* <div className="text-center flex flex-col gap-4">
            <h1>{title}</h1>
            {subTitle && <p>{subTitle}</p>}
            {error.final && <p className="text-red-500">{error.final}</p>}
          </div> */}
          <Field
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Field
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            error={errors.firstName}
          />
              <Field
            label="Email"
            name="email"
            value={values.lastName}
            onChange={handleChange}
            error={errors.firstName}
          />
           <Field
            label="Password"
            name="password"
            value={values.lastName}
            onChange={handleChange}
            error={errors.firstName}
          />

          {errors.form && <p className="text-red-500">{errors.form}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 hover:bg-black/80"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, error, className = "", ...inputProps }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={inputProps.name} className="font-medium">
        {label}
      </label>

      <input
        {...inputProps}
        value={inputProps.value ?? ""}
        className={`border p-3 rounded-none ${
          error ? "border-red-500/60" : "border-black/50"
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputProps.name}-error` : undefined}
      />

      {error && (
        <p id={`${inputProps.name}-error`} className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

const INVALID_CHARS = /[ ()<>\[\]:;,\\':\/?={}|\*&%$#!~` ]/;

function validate(v) {
  const err = {}[
    // required
    ("firstName", "lastName")
  ].forEach((k) => {
    if (!v[k].trim()) err[k] = "Required";
  });

  // email format
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    err.email = "Invalid email";

  // illegal characters
  if (v.firstName && INVALID_CHARS.test(v.firstName))
    err.firstName = "Letters only";
  if (v.lastName && INVALID_CHARS.test(v.lastName))
    err.lastName = "Letters only";

  return err;
}
