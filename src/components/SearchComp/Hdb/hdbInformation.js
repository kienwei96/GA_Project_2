import { Button } from "@mui/material";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./hdbInformation.css";
import Map from "../../Map";



export default function Information(props) {

    const params = useParams();
    const history = useHistory();


    const company = props.data?.filter( data => parseInt(data.id) === parseInt(params.id))
    if(!company) {
      return (
        <div></div>
      )
    }

    const address = `${(company[0].address==="na")?'NIL':company[0].address} ${(company[0].postal==="na")?' ':'S'+company[0].postal}`

    return (
      <>
      <div className="center">
      <h2>{company[0].name}</h2>
      <Map data={company[0]} address={address}/>
      </div>
      <div className="outer">
      <div className="body">
        <div className="container">
          <div className="heading">{`Company Information`}</div>
          <div>{`HDB Ref No. : ${(company[0].ref==="na")?'NIL':company[0].ref}`}</div>
          <div>{`UEN No. : ${(company[0].uen==="na")?'NIL':company[0].uen}`}</div>
          <div>{`Address : ${address}`}</div>
          <div>{`Contact No. : ${(company[0].contact==="na")?'NIL':company[0].contact}`}</div>
          <div>{`Email address : ${(company[0].email==="na")?'NIL':company[0].email}`}</div>
        </div>
      </div>
      </div>
      <hr/>
      <div className="center">
      <Button onClick={() => history.goBack()} sx={{ width: '80%', maxWidth: '150px', margin: '0 auto', height: '30px' }} variant="contained" >Back</Button>
      </div>
      <br/>
      </>

    )


}