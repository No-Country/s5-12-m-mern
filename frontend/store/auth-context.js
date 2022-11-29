"use client"

import { createContext, useState } from "react";

const AuthContext = createContext({
    user: {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({})

  const userIsLoggedIn = !!token;

  const loginHandler = (token, user) => {
    setToken(token);
    setUser(user);
  };

  const logoutHandler = () => {
    setToken(null);
    setToken({})
  };

  const contextValue = {
    user: user,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
