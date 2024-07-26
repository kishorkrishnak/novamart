"use client";

import { useAppDispatch } from "@/redux/store";
import { auth, signOut } from "../../config/firebase.config";
import { clearUser, setUser } from "@/redux/novaSlice";
import toast from "react-hot-toast";

const SignoutButton = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(clearUser());
    toast.success("Logout Successfull")
  };
  return (
    <button
      onClick={handleSignOut}
      className="btn btn-neutral text-base text-white px-6"
    >
      Sign Out
    </button>
  );
};

export default SignoutButton;
