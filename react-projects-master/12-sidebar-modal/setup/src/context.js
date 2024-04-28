import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppProvider.Provider value="hello">{children}</AppProvider.Provider>;
};

export {AppContext, AppProvider} 
