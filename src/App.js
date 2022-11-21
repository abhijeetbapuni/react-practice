import React, { useContext } from "react";

import Login from "./components4/Login/Login";
import Home from "./components4/Home/Home";
import MainHeader from "./components4/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  // don't use like this
  // useEffect(() => {
  //   console.log("calls like normal function");
  // });

  return (
    // value prop is required with your state values
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
