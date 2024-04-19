import { popupCenter } from "@/helper/popupCenter";
import { Button } from "@material-tailwind/react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { Inter } from "next/font/google";
import Image from "next/image";
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
    scriptElement.setAttribute("data-auth-url", "http://localhost:3000");
    scriptElement.async = true;

    telegramWrapperRef.current.appendChild(scriptElement);
  }, []);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="font-mono z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <p className="from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 lg:dark:bg-zinc-800/30 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.js</code>
        </p>
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
      </div>
      <script type="text/javascript">
        {function onTelegramAuth(user) {
          alert(
            "Logged in as " +
              user.first_name +
              " " +
              user.last_name +
              " (" +
              user.id +
              (user.username ? ", @" + user.username : "") +
              ")",
          );
        }}
      </script>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="Tsnake_fun_bot"
        data-size="large"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
      ></script>
      <div className="h-20 w-20 bg-red-400" ref={telegramWrapperRef}></div>
    </main>
  );
}
