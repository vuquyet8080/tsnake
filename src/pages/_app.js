"use client";
import "@/styles/globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider>
      <SessionProvider session={session}>
        <div
          className={` bg-secondary-100 flex  items-center justify-center ${inter.className}`}
        >
          <div className="fixed top-0 z-10 flex h-16 w-full flex-row items-center border bg-white px-4 shadow-md">
            <div className="relative h-12 w-36">
              <Image
                src={"/images/logo.png"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>

          <div className="h-full min-h-screen w-full max-w-screen-xl px-4 pt-16 md:px-10 ">
            <Component {...pageProps} />
          </div>
        </div>
      </SessionProvider>
    </ThemeProvider>
  );
}
