import React from "react";
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import "./Search.css";

export default function Search() {

  localStorage.clear();



      return (
        <>
        <div className="SearchPanel">
        <Link style={{ textDecoration: 'none' }} to='/search/hdbContractor'><Button variant="contained" >Directory of Renovation Contractor</Button>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/search/bcaContractor'><Button variant="contained" >BCA -Registered Contractor</Button>
        </Link>
        </div>
        </>

      )


}