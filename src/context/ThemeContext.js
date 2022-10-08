import React, { createContext, useContext, useState } from "react";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";

const MyThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const theme = themeProvider();
  return (
    <MyThemeContext.Provider value={theme}>{children}</MyThemeContext.Provider>
  );
};

const themes = { light: lightTheme, dark: darkTheme };
const useThemeContext = () => {
  return useContext(MyThemeContext);
};

const themeProvider = () => {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (_theme) => {
    if (Object.keys(themes).includes(_theme)) {
      console.log(
        "✋✋✋ ~ file: ThemeContext.js ~ line 21 ~ changeTheme ~ _theme",
        _theme
      );
      setTheme(themes[_theme]);
    }
  };

  return {
    theme,
    changeTheme,
  };
};

export default useThemeContext;
