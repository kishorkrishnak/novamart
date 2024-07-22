"use client";

const SignoutButton = () => {
  const handleSignOut = async () => {
    console.log("sign ouyt succesfull");
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
