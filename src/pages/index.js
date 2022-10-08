import Head from "next/head";
import { Box, Button, Switch } from "@mui/material";

export default function Home({ changeTheme }) {

  const handleChange = (e) => {
    changeTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
