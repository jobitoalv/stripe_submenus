import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContex = React.createContext();

const AppProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    return <AppContex.Provider>
        {children}
    </AppContex.Provider>
}