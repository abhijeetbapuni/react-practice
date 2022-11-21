import React, { useEffect, useState } from "react";

//create context and export
//the initial value is required only if you do not use AuthContext.Provider on the top level
//also you can use this for better auto completion
const AuthContext = React.createContext({
  isLoggedIn: true,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const localStorageIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (localStorageIsLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn", true);
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
