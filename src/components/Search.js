import React from "react";
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import "./Search.css";

export default function Search() {



      return (
        <>
        <div className="SearchPanel">
        <Link to='/search/hdbContractor'><Button variant="contained" >HDB Directory of Renovation Contractor</Button>
        </Link>
        <Link to='/search/bcaContractor'><Button variant="contained" >BCA Registered Contractor</Button>
        </Link>
        </div>
        </>

      )


}