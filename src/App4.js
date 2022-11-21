import React, { useContext } from "react";

import Login from "./components4/Login/Login";
import Home from "./components4/Home/Home";
import MainHeader from "./components4/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

// React context is not optimized for high frequency changes
//Only call react hooks in react functions i.e. react component functions and custom hooks
//Only call react hooks at the top level, not inside in nested functions or block level statements
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
