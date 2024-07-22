import Image from "next/image";
import SignoutButton from "./SignoutButton";
import PageTitle from "../components/PageTitle";

const LoginPage = async () => {
  return (
    <main className="flex relative flex-col items-center justify-center min-h-[calc(100vh-160px)]">
      <PageTitle title={"Login"} />

      <div className="flex flex-col md:flex-row gap-6">
        <div className="cursor-pointer flex items-center justify-center gap-2 border border-black hover:border-blue-600 rounded-md px-4">
          <Image src="/images/google.svg" alt="logo" width={46} height={46} />
          <p className="font-medium">Sign in with Google</p>
        </div>

        <SignoutButton />
      </div>
    </main>
  );
};

export default LoginPage;
