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
  onSuccess,
  formData,
  showLogInInfo,
//   loading,
  setFormData,
  imageAlt,
  isLogIn,
  setIsLogIn,
  FORMS
}) {



  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);


  
  /* ---------- handlers -------------------------------------------- */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErr = validate(formData, names);
    setError(newErr);
    if (Object.keys(newErr).length) return;
  
    setLoading(true);
    try {
      // Call onSuccess with formData, not event
      await onSuccess?.(formData);
    } finally {
      setLoading(false);
    }
  };


const names = FORMS.map(f => f.name);
  return (
    <section className="w-full flex dynamic-y-padding flex-col md:flex-row items-center justify-between gap-10">
      {/* ------------- form column ----------------------------------- */}
      <div className="w-full md:flex-1 flex flex-col custom-gap-6">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full flex flex-col custom-gap-9"
        >
          <div className="text-center flex flex-col gap-4">
            <h1>{title}</h1>
            {subTitle && <p>{subTitle}</p>}
            {error.final && <p className="text-red-500">{error.final}</p>}
          </div>

          {/* inputs */}
          {/* <div className="w-full flex flex-col custom-gap-6">
            <FormSection fields={FORMS} start={0} end={2} />
            <FormSection fields={FORMS} start={2} end={FORMS.length} />
          </div> */}
        <div className="w-full flex flex-col custom-gap-6">
  {/* First two fields in a row */}
  <div className="flex flex-col md:flex-row custom-gap-6">
    {FORMS.slice(0, 2).map((f) => (
      <div key={f.name} className="w-full">
        <Input
          {...f}
          value={formData[f.name]}
          id={f.name}
          version={f.label}
          onChange={handleChange}
          error={error[f.name]}
        />
      </div>
    ))}
  </div>

  {/* Rest of fields stacked vertically */}
  <div className="flex flex-col custom-gap-6">
    {FORMS.slice(2).map((f) => (
      <Input
        key={f.name}
        {...f}
        id={f.name}
        version={f.label}
        value={formData[f.name]}
        onChange={handleChange}
        error={error[f.name]}
      />
    ))}
  </div>
</div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 border border-black bg-black hover:bg-black/75 text-white"
          >
            {loading ? "Submitting..." : "Sign up"}
          </button>
        </form>
              {/* ------------- optional image column ------------------------- */}
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
}

/* ------------------------------------------------------------------ *
   Validation identical to your old rules
   ------------------------------------------------------------------ */
const INVALID_CHARS = /[ ()<>\[\]:;,\\'"\/?={}|\*&%$#!~`]/;

function validate(v, names) {
    const err = {};
  
    names.forEach((name) => {
      if (!v[name]?.trim()) err[name] = `${name} is required`;
    });
  
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      err.email = "Email must be valid";
  
    if (v.firstName && INVALID_CHARS.test(v.firstName))
      err.firstName = "First name must only include letters";
  
    if (v.lastName && INVALID_CHARS.test(v.lastName))
      err.lastName = "Last name must only include letters";
  
    return err;
  }