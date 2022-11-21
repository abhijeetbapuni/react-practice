import React from "react";

//create context and export
//the initial value is required only if you do not use AuthContext.Provider on the top level
const AuthContext = React.createContext({
  isLoggedIn: true,
});

export default AuthContext;
