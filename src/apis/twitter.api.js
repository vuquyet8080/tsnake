import axios from "axios";

export const retweetTwitterApi = (id) => {
  axios.post(`https://api.twitter.com/2/users/:${id}/retweets`);
};
