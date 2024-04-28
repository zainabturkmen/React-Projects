import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const [isSidebar, setIsSidebar] = useState(false)
const [isSidebar, setIsSidebar] = useState(false)

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

//custom hook

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider} 
