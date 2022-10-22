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

const useGlobalContext = () => useContext(GlobalContext);

function useGlobalContextProvider() {
  const [topNav, setTopNav] = useState(true);
  const [footer, setFooter] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(null);

  const setMobileLimitedMenu = (heading, backControl) => {
    if (heading) {
      setMobileMenu({
        leftControl: backControl || <ArrowBackOutlinedIcon />,
        heading: heading,
      });
    } else {
      setMobileMenu(null);
    }
  };

  return {
    topNav,
    footer,
    mobileMenu,
    setTopNav,
    setFooter,
    setMobileLimitedMenu,
  };
}

export default useGlobalContext;
