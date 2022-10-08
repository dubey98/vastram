import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import darkTheme from "../styles/theme/darkTheme";
import "../styles/globals.css";

const themes = { light: lightTheme, dark: darkTheme };

const ClientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = ClientSideEmotionCache,
}) {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (_theme) => {
    if (Object.keys(themes).includes(_theme)) setTheme(themes[_theme]);
    else
      console.error(
        "A component is trying to set a theme which is not defined",
        _theme
      );
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} changeTheme={changeTheme} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
