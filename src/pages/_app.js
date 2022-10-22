import React, { useState } from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeContextProvider } from "../context/ThemeContext";
import { GlobalContextProvider } from "src/context/GlobalContext";

const ClientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = ClientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeContextProvider>
        <GlobalContextProvider>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </GlobalContextProvider>
      </ThemeContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
