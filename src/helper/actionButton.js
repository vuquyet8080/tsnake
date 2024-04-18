import { ACTION } from "@/constants/action";

const client = new Client(
  "AAAAAAAAAAAAAAAAAAAAAKB6tQEAAAAA1Cg%2F%2Bsoj6M5ES%2Fi%2BHWU8kqm4wLQ%3DdeMIMvZ5spZgYfqtflk85xSgQV4Hn2awy0enoekNgAUYf4bGa8",
);
export const onActionButton = async ({ type, action, data }) => {
  console.log("type, action, data", type, action, data);
  if (type === "twitter" && action === ACTION.twitter.follow) {
    return window.open(
      `https://twitter.com/intent/follow?screen_name=${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter.like) {
    return window.open(
      `https://twitter.com/intent/like?tweet_id=${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter["post&tag"]) {
    return window.open(
      `${data?.targetActionId}`,
      // "twitter",
      "",
      "width = 700, height = 700",
    );
  }
  if (type === "twitter" && action === ACTION.twitter.retweet) {
  }
};
