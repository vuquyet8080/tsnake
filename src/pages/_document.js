import { Html, Head, Main, NextScript } from "next/document";

function onTelegramAuth(user) {
  alert(
    "Logged in as " +
      user.first_name +
      " " +
      user.last_name +
      " (" +
      user.id +
      (user.username ? ", @" + user.username : "") +
      ")"
  );
}
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script
        async
        // src={`https://wait.crowdhandler.com/js/latest/main.js?id=${process.env.NEXT_PUBLIC_CROWD_HANDLE}&spa=true`}
      >
        {console.log("1111")}
      </script>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="Tsnake_fun_bot"
        data-size="large"
        data-userpic="false"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
        data-auth-url="/api/auth/telegram/callback"
      ></script>
      <script type="text/javascript" async>
        {function onTelegramAuth(user) {
          alert(
            "Logged in as " +
              user.first_name +
              " " +
              user.last_name +
              " (" +
              user.id +
              (user.username ? ", @" + user.username : "") +
              ")"
          );
        }}
      </script>

      <style jsx>{`
        .telegram-login-button {
          background-color: #0088cc; /* Telegram Blue */
          color: #ffffff; /* White text */
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .telegram-login-button:hover {
          background-color: #005580; /* Darker shade of Telegram Blue */
        }
      `}</style>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
