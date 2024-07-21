import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black py-20 px-4">
      <div className="max-w-screen-xl mx-auto grid gap-8 grid-cols-1  md:grid-cols-2  lg:grid-cols-4">
        <div className="flex flex-col items-start justify-center gap-5">
          <Link href="/">
            <Image
              quality={100}
              src="/images/logo-white.png"
              alt="logo"
              width="110"
              height="13"
            />
          </Link>
          <div className="text-[#949494] flex justify-between items-center justify-center gap-5">
            <a href="https://github.com/kishorkrishnak">
              <FaGithub size={19} className="hover:text-white duration-200" />
            </a>

            <a href="https://github.com/kishorkrishnak">
              <FaFacebook size={19} className="hover:text-white duration-200" />
            </a>

            <a href="https://github.com/kishorkrishnak">
              <FaTwitter size={19} className="hover:text-white duration-200" />
            </a>

            <a href="https://github.com/kishorkrishnak">
              <FaInstagram
                size={19}
                className="hover:text-white duration-200"
              />
            </a>

            <a href="https://github.com/kishorkrishnak">
              <FaYoutube size={19} className="hover:text-white duration-200" />
            </a>

            <a href="https://github.com/kishorkrishnak">
              <FaLinkedin size={19} className="hover:text-white duration-200" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-3">
          <h1 className="text-2xl text-white font-semibold">Locate us</h1>
          <ul className="text-[#949494] flex flex-col items-start justify-center gap-2">
            <li>Kasaragod, Kerala</li>
            <li>Mobile: 9999999999</li>

            <li>Phone: 9999999999</li>

            <li>E-mail: novamart@gmail.com</li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <h1 className="text-2xl text-white font-semibold">Links</h1>
          <ul className="text-[#949494] flex flex-col items-start justify-center gap-2">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>

            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li>
              <Link href={"/orders"}>Orders</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder="email"
            className="w-full px-5 py-2 bg-transparent border border-white"
          />
          <button
            type="button"
            className="py-1 text-white text-sm border-x border-b w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
