"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const user = useAppSelector((state) => state.nova.user);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-white py-1 border border-b-black px-4 sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <Link href="/">
          <Image
            quality={100}
            src="/images/logo-black.png"
            alt="logo"
            width="110"
            height="13"
          />
        </Link>

        <ul className="flex items-center justify-center gap-5 md:gap-9 font-bold">
          <li className="hidden md:block hover:underline hover:underline-offset-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hidden md:block hover:underline hover:underline-offset-2">
            <Link href={"/orders"}>Orders</Link>
          </li>
          <li>
            <Link href={"/cart"}>
              <Image
                src="/images/cart.svg"
                alt="cart"
                width="0"
                height="0"
                className="w-6 h-auto"
              />
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <div className="flex items-center justify-center gap-2">
                {isMounted && (
                  <>
                    <Image
                      src={user?.photo || "/images/defaultuserprofile.webp"}
                      alt="user profile"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <p className="font-bold text-sm">
                      {user?.name || "Login"}
                    </p>
                  </>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
