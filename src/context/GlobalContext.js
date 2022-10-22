import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const contextValue = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

function useGlobalContextProvider() {
  const [topNav, setTopNav] = useState(true);
  const [footer, setFooter] = useState(true);

  return {
    topNav,
    footer,
    setTopNav,
    setFooter,
  };
}

export default useGlobalContext;
