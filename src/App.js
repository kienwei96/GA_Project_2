import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Search from "./components/Search";
import SearchHDB from "./components/SearchHDB";
import NavBar from "./components/NavBar";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Mulish, Arial",
    body1: {
      color: "#084c61",
    },
    button: {
      textTransform: "none",
      fontSize: "15px",
      padding: "5px",
      marginLeft: "5px",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#084C61",
      light: "#a8acbd",
      dark: "#a8acbd",
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavBar/>
    <div className="App">
      <main>
        <Switch>
        <Route path="/search/hdbContractor">
         <SearchHDB/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
        </Switch>
      </main>
    </div>
   
    </ThemeProvider>
  );
}

export default App
