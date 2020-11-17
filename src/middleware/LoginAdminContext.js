import { createContext } from "react";
import { useStateIfMounted } from "use-state-if-mounted";
import empty from "is-empty";
import localStorage from "localStorage";
export const LoginAdminContext = createContext();
export const LoginProvider = (props) => {
  const [token_Admin, setToken_Admin] = useStateIfMounted('');
  const TokenGenerator = require("token-generator")({
    salt: "0CBFAE",
    timestampMap: "koiujrfget",
  });
  const localToken = localStorage.getItem("tokenAdmin");
  const token = empty(localToken) ? "" : localToken;
  if (TokenGenerator.isValid(token)) {
    const saveToken = token;
    setToken_Admin(saveToken);
  } else {
    const saveToken = '';
    setToken_Admin(saveToken);
  }

  return (
    <LoginAdminContext.Provider value={[token_Admin]}>
      {props.children}
    </LoginAdminContext.Provider>
  );
};
