import React, { useEffect, useState } from "react";

import Login from "./components4/Login/Login";
import Home from "./components4/Home/Home";
import MainHeader from "./components4/MainHeader/MainHeader";

function App() {
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
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
