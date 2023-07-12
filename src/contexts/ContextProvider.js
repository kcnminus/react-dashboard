import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false, 
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true});
  }
  return (
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      handleClick,
    }}>
      {children} 
    </StateContext.Provider>
  ) // Children: whatever you wrap your context with, whatever is inside of it will be displayed. 
}

//Use activeMenu inside sidebar or app components
export const useStateContext = () => useContext(StateContext); //passing in which context we want to use (StateContext).