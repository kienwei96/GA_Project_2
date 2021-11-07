import { Button } from "@mui/material";
import React, { useState, useEffect} from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Information.css";



export default function Information(props) {

    const params = useParams();
    const history = useHistory();


    const company = props.data?.filter( data => parseInt(data.id) === parseInt(params.id))


    return (
      <>
      <h2>Company Information</h2>
      <div className="body">
        <div>
          <div className="company_name">{`${company[0].name}`}</div>
          <div>{`HDB Ref No. : ${company[0].ref}`}</div>
          <div>{`UEN No. : ${company[0].uen}`}</div>
          <div>{`Address : ${company[0].address}`}</div>
          <div>{`Contact No. : ${company[0].contact}`}</div>
          <div>{`Email address : ${company[0].email}`}</div>
        </div>
      </div>
      <hr/>
      <Button onClick={() => history.goBack()} sx={{ width: '80%', maxWidth: '150px', margin: '0 auto', height: '30px' }} variant="contained" >Back</Button>
      </>

    )


}