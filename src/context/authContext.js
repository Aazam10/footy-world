import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { authReducer } from "../reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const initialState = { token: "", user: "" };

  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const checkUser = () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const userCred = { token, user };
    authDispatch({ type: "INITIAL_CHECK", payload: userCred });
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
