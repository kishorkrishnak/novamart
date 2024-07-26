"use client";

import { clearUser } from "@/redux/novaSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import toast from "react-hot-toast";
import { auth, signOut } from "../../config/firebase.config";
import Image from "next/image";
import { userAgent } from "next/server";

const SignoutButton = () => {
  const dispatch = useAppDispatch();
  const { name, photo, email } = useAppSelector((state) => state.nova.user);
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(clearUser());
    toast.success("Logout Successfull");
  };
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center gap-3">
        <Image
          className="rounded-full"
          src={photo}
          alt="logo"
          width="200"
          height="13"
        />
     <div className="text-center">
     <h1 className="text-base md:text-lg font-semibold">{name}</h1>
     <h1 className="text-base md:text-lg font-medium">{email}</h1>
     </div>
      </div>
      <button
        onClick={handleSignOut}
        className="btn btn-neutral text-base text-white px-6"
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignoutButton;
