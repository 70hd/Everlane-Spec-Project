"use client";
import { useCallback, useState } from "react";
import Image from "next/image";
import Input from "./input";        // ← use the same Input you already built

/* ------------------------------------------------------------------ *
   Sign-Up Form
   ------------------------------------------------------------------ */
export default function SignUpForm({
  title = "Create account",
  subTitle,
  imageSrc,           // optional hero image (same pattern as your old form)
  imageAlt = "",
  onSuccess,
}) {
  /* ---------- state ------------------------------------------------ */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  /* ---------- handlers -------------------------------------------- */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErr = validate(formData);
    setError(newErr);
    if (Object.keys(newErr).length) return;

    setLoading(true);
    try {
      // delegate to parent
      await onSuccess?.(formData);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- render ---------------------------------------------- */
  const FIELDS = [
    { label: "First Name", name: "firstName", type: "text", placeholder: "Joe" },
    { label: "Last Name",  name: "lastName",  type: "text", placeholder: "Ford" },
    { label: "Username",   name: "username",  type: "text", placeholder: "joeford99" },
    { label: "Email",      name: "email",     type: "email",placeholder: "joe@domain.com" },
    { label: "Password",   name: "password",  type: "password", placeholder: "••••••••" },
  ];

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
      {/* ------------- form column ----------------------------------- */}
      <div className="w-full md:flex-1 flex flex-col gap-6">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-9"
        >
          <div className="text-center flex flex-col gap-4">
            <h1>{title}</h1>
            {subTitle && <p>{subTitle}</p>}
            {error.final && <p className="text-red-500">{error.final}</p>}
          </div>

          {/* inputs */}
          <div className="w-full flex flex-col gap-6">
            {FIELDS.map((f) => (
              <Input
                key={f.name}
                {...f}
                id={f.name}
                value={formData[f.name]}
                onChange={handleChange}
                error={error[f.name]}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 border border-black bg-black hover:bg-black/75 text-white"
          >
            {loading ? "Submitting..." : "Sign up"}
          </button>
        </form>
      </div>

      {/* ------------- optional image column ------------------------- */}
      {imageSrc && (
        <div className="w-full md:flex-1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={606}
            height={606}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ *
   Validation identical to your old rules
   ------------------------------------------------------------------ */
const INVALID_CHARS = /[ ()<>\[\]:;,\\'"\/?={}|\*&%$#!~`]/;

function validate(v) {
  const err = {};

  // required
  ["firstName", "lastName", "username", "email", "password"].forEach((k) => {
    if (!v[k].trim()) err[k] = `${k} is required`;
  });

  // email format
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    err.email = "Email must be valid";

  // illegal chars
  if (v.firstName && INVALID_CHARS.test(v.firstName))
    err.firstName = "First name must only include letters";
  if (v.lastName && INVALID_CHARS.test(v.lastName))
    err.lastName = "Last name must only include letters";

  return err;
}
