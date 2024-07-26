"use client";

import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../../config/firebase.config";
import { setUser } from "@/redux/novaSlice";
import toast from "react-hot-toast";

const SignInButton = () => {
  const user = useAppSelector((state) => state.nova.user);
  const dispatch = useAppDispatch();
  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    dispatch(
      setUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
    toast.success("Login Successfull");
  };
  return (
    <div
      onClick={handleSignIn}
      className="cursor-pointer flex items-center justify-center gap-2 border border-black hover:border-blue-600 rounded-md px-4"
    >
      <Image src="/images/google.svg" alt="logo" width={46} height={46} />
      <p className="font-medium">Sign in with Google</p>
    </div>
  );
};

export default SignInButton;
