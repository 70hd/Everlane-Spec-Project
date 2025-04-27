"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // App Router version
import { useAuth } from "../context/authContext";
import Accounts from "../components/logIn-createAccount";

export default function Account() {
  const { authData, setAuthData } = useAuth();
  const [isLogIn, setIsLogIn] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (authData.loggedIn) {
      router.push("/");
    }
  }, [authData.loggedIn, router]);

  const LogOut = () => {
    setAuthData({
      loggedIn: false,
      username: "",
      password: "",
      email: "",
      permissions: "",
    });
  };

  if (!hasMounted) return null;

  return (
    <main className="items-center justify-center flex flex-col gap-9">
      {!authData.loggedIn && (
        <div className="w-full h-fit flex flex-col gap-3">
          <Accounts isLogIn={isLogIn} setIsLogIn={setIsLogIn} />
        </div>
      )}
    </main>
  );
}
