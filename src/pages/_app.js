"use client";
import "@/styles/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div
      className={` flex items-center  justify-center bg-secondary-100 ${inter.className}`}
    >
      <div className="fixed top-0 z-10 flex flex-row items-center w-full h-16 px-4 bg-white border shadow-md">
        <div className="relative h-12 w-36">
          <Image
            src={"/images/logo.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>

      <div className="w-full h-full max-w-screen-xl min-h-screen px-4 pt-16 md:px-10 ">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
