import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import SearchHDB from "./components/SearchComp/Hdb/SearchHDB";
import SearchBCA from "./components/SearchComp/Bca/SearchBCA";
import NavBar from "./components/NavBar";
import HdbResult from "./components/SearchComp/Hdb/hdbInformation";
import BcaResult from "./components/SearchComp/Bca/bcaInformation";
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

  const [hdbData, sethdbData] = useState();
  const [bcaData, setbcaData] = useState();

  const hdbURL = "https://data.gov.sg/api/action/datastore_search?resource_id=e16c0173-3be4-4fa2-ac9f-ee56ecb0ebbc&q=&limit=50000";
  const bcaURL = "https://data.gov.sg/api/action/datastore_search?resource_id=a9a9327f-7634-4367-be7f-d679a729bd96&limit=50000";

  useEffect(() => {
    async function fetchData() {
    try {
      const Response1 = await fetch(hdbURL);
      const data1 = await Response1.json();
      const completeData1 = data1.result.records;
      sethdbData(
        completeData1.map((ele) => ({
            address: ele.address,
            name: ele.company_name,
            contact: ele.contact_no,
            ref: ele.directory_ref_no,
            email: ele.email_address,
            postal: ele.postal_code,
            rank: ele.rank,
            uen: ele.uen,
            id: ele._id,
    
        }))
      );

      const Response2 = await fetch(bcaURL);
      const data2 = await Response2.json();
      const completeData2 = data2.result.records;

      setbcaData(
        completeData2.map((ele) => ({
          grade: ele.grade,
          street: ele.street_name,
          buildingName: ele.building_name,
          uen: ele.uen_no,
          workhead: ele.workhead,
          expiry: ele.expiry_date.substr(0,10),
          postal: ele.postal_code,
          name: ele.company_name,
          unit: ele.unit_no,
          contact: ele.tel_no,
          id: ele._id,
          buildingID: ele.building_no,
    
        }))
      );
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
}, []);

  console.log("bcaData:" ,bcaData);
  console.log("hdbData:" ,hdbData);


  return (
    <ThemeProvider theme={theme}>
    <NavBar/>
    <div className="App">
      <main>
        <Switch>
        <Route path="/search/hdbContractor/:id">
          <HdbResult data={hdbData}/>
        </Route>
        <Route path="/search/hdbContractor">
         <SearchHDB/>
        </Route>
        <Route path="/search/bcaContractor/:id">
          <BcaResult data={bcaData}/>
        </Route>
        <Route path="/search/bcaContractor">
         <SearchBCA/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        </Switch>
      </main>
    </div>
   
    </ThemeProvider>
  );
}

export default App