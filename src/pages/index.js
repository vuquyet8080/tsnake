import { popupCenter } from "@/helper/popupCenter";
import { Button } from "@material-tailwind/react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session, status } = useSession();

  const [listProviders, setProviders] = useState([]);
  const fetchProviders = async () => {
    const providers = await getProviders();
    setProviders(providers);
  };
  useEffect(() => {
    fetchProviders();
  }, []);

  console.log(" data: session", session?.token);
  const telegramWrapperRef = useRef(null);
  useEffect(() => {
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://telegram.org/js/telegram-widget.js?22";
    scriptElement.setAttribute("data-telegram-login", "Tsnake_fun_bot");
    scriptElement.setAttribute("data-size", "large");
    scriptElement.setAttribute("data-onauth", "onTelegramAuth(user)");
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="font-mono z-10 flex w-full max-w-5xl flex-col items-center justify-between gap-y-2 text-sm lg:flex">
        <Button onClick={signOut}>sign out</Button>
        {Object.values(listProviders).map((provider) => (
          <div key={provider.name}>
            <Button onClick={() => signIn(provider.id, {})}>
              Sign in with {provider.name}
            </Button>
          </div>
        ))}
        <Button
          onClick={() => {
            popupCenter("/login/twitter", "Sample Sign In");
          }}
        >
          Login new tab
        </Button>
        <div>
          <script
            defer
            type="text/javascript"
          >{`function onTelegramAuth(user) {console.log(user)}`}</script>

          <script
            defer
            src="https://telegram.org/js/telegram-widget.js?22"
            data-telegram-login="Tsnake_fun_bot"
            data-size="large"
            data-userpic="false"
            data-radius="4"
            data-onauth="onTelegramAuth(user)"
            data-request-access="write"
          ></script>
        </div>
        <div ref={telegramWrapperRef} id="telegramWrapperRef"></div>
      </div>
    </main>
  );
}
