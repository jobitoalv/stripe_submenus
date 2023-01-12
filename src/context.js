import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContex = React.createContext();

const AppProvider = ({ children }) => {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const [ isSModalOpen, setIsModalOpen ] = useState(true);


    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalrOpen(false)
    }

    return <AppContex.Provider>
        {children}
    </AppContex.Provider>
}