import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "../redux/reduxProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaMart",
  description: "A shopping dream",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html lang="en" data-theme="winter">
        <body className={nunito.className}>
          <Navbar />
          {children}
          <Footer />

          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </ReduxProvider>
  );
}
