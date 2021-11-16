import { Button } from "@mui/material";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./hdbInformation.css";



export default function Information(props) {

    const params = useParams();
    const history = useHistory();


    const company = props.data?.filter( data => parseInt(data.id) === parseInt(params.id))
    if(!company) {
      return (
        <div></div>
      )
    }


    return (
      <>
      <h2>Company Information</h2>
      <div className="body">
        <div>
          <div className="company_name">{`${company[0].name}`}</div>
          <div>{`HDB Ref No. : ${(company[0].ref==="na")?'NIL':company[0].ref}`}</div>
          <div>{`UEN No. : ${(company[0].uen==="na")?'NIL':company[0].uen}`}</div>
          <div>{`Address : ${(company[0].address==="na")?'NIL':company[0].address} ${(company[0].postal==="na")?' ':'S'+company[0].postal}`}</div>
          <div>{`Contact No. : ${(company[0].contact==="na")?'NIL':company[0].contact}`}</div>
          <div>{`Email address : ${(company[0].email==="na")?'NIL':company[0].email}`}</div>
        </div>
      </div>
      <hr/>
      <Button onClick={() => history.goBack()} sx={{ width: '80%', maxWidth: '150px', margin: '0 auto', height: '30px' }} variant="contained" >Back</Button>
      </>

    )


}