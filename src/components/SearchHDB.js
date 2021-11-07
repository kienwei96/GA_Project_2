import React, { useEffect, useRef, useState } from "react";
import "./SearchHDB.css";
import Button from '@mui/material/Button';
import DataTable from "./DataTable";



export default function SearchHDB() {
    const companySearch = useRef();
    const [data, setData] = useState();

    let search;
    const handleSubmit =() => {
        search = companySearch.current.value.replace(/\s/, "+")
        callApi(search)
    }
    
    async function callApi(search){
        try {
            const response = await fetch(`https://data.gov.sg/api/action/datastore_search?resource_id=e16c0173-3be4-4fa2-ac9f-ee56ecb0ebbc&q=${search}&limit=50000`);
            const rawData = await response.json();
            let completeData = rawData.result.records;
            console.log("rawdata is:",rawData)
            console.log("complete data is:",completeData)
            setData(
                completeData.map((ele) => ({
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
        } catch (error) {
            console.log(error);
        }
    }



    
    console.log("data is: ",data)

    return (
      <>
      <div className="searchHDB">
      <input placeholder="Search by company name or UEN no..." type="text" ref={companySearch} />
      <Button onClick={handleSubmit} sx={{ width: '80%', maxWidth: '150px', margin: '0 auto', height: '30px' }} variant="contained" >Search</Button>
      </div>
      <DataTable data={data}/>
      </>

    )


}