"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import PageTitle from "../components/PageTitle";
import SignInButton from "./SignInButton";
import SignoutButton from "./SignoutButton";

const LoginPage = () => {
  const user = useAppSelector((state) => state.nova.user);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main className="flex relative flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <PageTitle title={"Login"} />
      <div className="flex flex-col md:flex-row gap-6">
        {user ? <SignoutButton /> : <SignInButton />}
      </div>
    </main>
  );
};

export default LoginPage;
