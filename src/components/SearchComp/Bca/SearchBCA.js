import React, { useRef } from "react";
import "./SearchBCA.css";
import Button from '@mui/material/Button';
import BcaDataTable from "./BcaDataTable";
import { useLocalStorage } from "../../Hooks/UseLocalStorage"



export default function SearchHDB() {
    const companySearch = useRef();
    const [savedData, setSavedData] = useLocalStorage();

    let search;
    const handleSubmit =() => {
        search = companySearch.current.value.replace(/\s/, "+")
        callApi(search)
    }
    
    
    async function callApi(search){
        try {
            const response = await fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=a9a9327f-7634-4367-be7f-d679a729bd96&q=${search}&limit=50000`);
            const rawData = await response.json();
            let completeData = rawData.result.records;
            
            setSavedData(
                completeData.map((ele) => ({
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



    console.log("savedData is:" , savedData)

    return (
      <>
      <div className="searchBCA">
      <input placeholder="Search by company name or UEN no..." type="text" ref={companySearch} />
      <Button onClick={handleSubmit} sx={{ width: '80%', maxWidth: '150px', margin: '0 auto', height: '30px' }} variant="contained" >Search</Button>
      </div>
      <BcaDataTable data={savedData}/>
      </>

    )


}