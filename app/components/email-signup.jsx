import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

const EmailSignup = ({ col, cta, red, route,label }) => {
  const [emailSignup, setEmailSignup] = useState({ email: "" });
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState();
  const { authData, setAuthData } = useAuth();
  const handleChange = (e) => {
    setEmailSignup({ email: e.target.value });
  };

  useEffect(() => {
    if (authData.loggedIn) {
      setEmailSignup({ email: authData.email });
    }
  }, [authData]);
  const finalSubmit = () => {
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
    const PostEmail = async () => {
      try {
        const fetchItems = await fetch(route, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: emailSignup.email }),
        });

        if (fetchItems.status === 400) {
          setServerError("This email is already signed up(double check code)");
        }
      } catch (error) {
        setServerError(error);
      }
    };
    const email = emailSignup.email;
    if (
      !email.includes("@") ||
      !email.includes(".") ||
      email.length < 6 ||
      INVALID_CHARS.some((char) => email.includes(char))
    ) {
      setError(true);
    } else {
      setError(false);
      PostEmail();
    }
  };

  const errorId = "email-error";
  const serverErrorId = "server-error";

  const Error = ({ error, text, errorId }) => (
    <>
      {error && (
        <p id={errorId} className="text-red-500" role="alert">
          {text ? text : error}
        </p>
      )}
    </>
  );

  return (
    <section
      className={`flex  ${
        col ? "flex-col" : "flex-row"
      } custom-gap-3 text-center items-start`}
    >
      <div className="flex flex-col w-full">
      <Error error={serverError} errorId={serverErrorId} />
      <Error error={error} text={"Invalid email"} errorId={errorId} />

    {label &&  <label htmlFor={1}>{"Email"}</label>}

      <input
        type="email"
        id={1}
        placeholder="JoeFord@gmail.com"
        className={`border ${
          red
            ? error
              ? "border-red-500"
              : "border-red-500/50"
            : "border-black/50"
        } w-full h-fit p-3 md:min-w-[285px] `}
        onChange={handleChange}
        value={emailSignup.email}
        aria-invalid={error || !!serverError}
        aria-describedby={
          [error ? errorId : null, serverError ? serverErrorId : null]
            .filter(Boolean)
            .join(" ") || undefined
        }
      />
      </div>
      <button
        className="w-full p-3 h-fit bg-black text-white hover:bg-black/75"
        onClick={finalSubmit}
      >
        {cta}
      </button>
    </section>
  );
};

export default EmailSignup;
