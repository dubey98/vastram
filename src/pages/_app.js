import React from "react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

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
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeContextProvider>
        <GlobalContextProvider>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </GlobalContextProvider>
      </ThemeContextProvider>
    </CacheProvider>
  );
}

export default MyApp;
