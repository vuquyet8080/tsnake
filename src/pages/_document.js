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
      <Head>
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?22"
          data-telegram-login="Tsnake_fun_bot"
          data-size="large"
          data-onauth="onTelegramAuth(user)"
          data-request-access="write"
        ></script>
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
                ")"
            );
          }}
        </script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
