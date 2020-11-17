import Router from "next/router";
import { firestore } from "../database/firebase";
const TokenGenerator = require("token-generator")({
  salt: "0CBFAE",
  timestampMap: "koiujrfget",
});