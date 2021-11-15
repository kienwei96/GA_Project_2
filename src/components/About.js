import React from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Typography component="span">
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          width: "100vw",
        }}
      >
        <div>
          This site was created using ReactJS
          <br />
          <br />
          Maps: ArcGIS API for JavaScript
          <br />
          Tables: material-table
          <br />
          Styling: Material-UI
          <br />
          <br />
          List of contractor data from data.gov.sg API<br/>

        </div>
        <div>
          <a href="https://github.com/kienwei96/GA_Project_2" target="blank">
            <GitHub
              style={{ padding: "30px", fontSize: "45px", color: "#5fa8ab" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/kienwei96" target="blank">
            <LinkedIn
              style={{ margin: "30px", fontSize: "45px", color: "#5fa8ab" }}
            />
          </a>
        </div>
      </div>
    </Typography>
  );
};

export default About;