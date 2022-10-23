import React, { createContext, useContext, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const contextValue = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

/**
 *
 * @returns
 */
const useGlobalContext = () => useContext(GlobalContext);

function useGlobalContextProvider() {
  const [topNav, setTopNav] = useState(true);
  const [footer, setFooter] = useState(true);
  const [mobileNav, setMobileNav] = useState(null);

  const setMobileNavProperties = (heading) => {
    if (heading) {
      setMobileNav({ heading });
    } else setMobileNav(null);
  };

  return {
    topNav,
    footer,
    mobileNav,
    setTopNav,
    setFooter,
    setMobileNavProperties,
  };
}

export default useGlobalContext;
