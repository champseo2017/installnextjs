import Router from "next/router";
import { firestore } from "../database/firebase";
const TokenGenerator = require("token-generator")({
  salt: "0CBFAE",
  timestampMap: "koiujrfget",
});
export const getApiFirebase = (collection = "", token = "") => {
  if (TokenGenerator.isValid(token)) {
    const getCollection = firestore.collection(collection);
    getCollection
      .get()
      .then((snapshot) => {
        return snapshot;
      })
      .catch((err) => {
        return Router.push("/404");
      });
  } else {
    return false;
  }
};
