import { Button } from "@mui/material";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import "./bcaInformation.css";
import Map from "../../Map";



export default function Information(props) {

    const params = useParams();
    const history = useHistory();


    const company = props.data?.filter( data => (data.id) === parseInt(params.id))

    if(!company) {
      return (
        <div></div>
      )
    }
    
    const company_id = (company[0].buildingID==="na")?' ':company[0].buildingID;
    const company_street = (company[0].street==="na")?' ':company[0].street;
    const company_unit = (company[0].unit==="na")?' ':company[0].unit;
    const company_buildingName = (company[0].buildingName==="na")?' ':company[0].buildingName;
    const company_postal = (company[0].postal==="na")?' ':"S"+company[0].postal;
    


    return (
      <>
      <div className="center">
      <h2>{company[0].name}</h2>
      <Map data={company[0]} address={company_id+' '+company_street+' '+company_unit+' '+company_buildingName+' '+company_postal}/>
      </div>
      <div className="outer">
      <div className="body">
        <div>
          <div className="heading">{`Company Information`}</div>
          <div>{`UEN No. : ${company?company[0].uen:''}`}</div>
          <div>{`Address : ${company?company_id+' '+company_street+' '+company_unit+' '+company_buildingName+' '+company_postal:''}`}</div>
          <div>{`Contact No. : ${company?company[0].contact:''}`}</div>
          <div>{`Workhead : ${company?company[0].workhead:''}`}</div>
          <div>{`Grade : ${company?company[0].grade:''}`}</div>
          <div>{`License Expiry Date : ${company?company[0].expiry:''}`}</div>
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