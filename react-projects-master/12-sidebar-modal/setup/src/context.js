import React, { useState, useContext } from 'react'


const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return(
        <AppProvider.Provider  value={}>{children}</AppProvider.Provider>
    )
}
