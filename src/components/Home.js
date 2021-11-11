import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import renovation from '../image/renovation.png';
import window from '../image/windows.png';
import plumbing from '../image/plumbing.png';
import waterproof from '../image/waterproof.png';
import repair from '../image/repair.png';
import crack from '../image/crack.png';
import "./Home.css";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'grey',
  }));



export default function Home() {

    localStorage.clear();
    const [category, setCategory] = useState();

    const handleClick =() => {
     
  }

    return (
        <>
        <div className="outer">
        <div className="Home">
        <h1>Choose the type of contractor you are looking for.</h1>
        <div className="list">
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/renovation'><Button sx={{width: 250}}variant="contained" ><img style={{marginRight: '10px'}}src={renovation} alt="renovation" width="30" height="30"></img>Renovation</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/windows'><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={window} alt="window" width="30" height="30"></img>Window</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/plumbing'><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={plumbing} alt="plumbing" width="30" height="30"></img>Plumbing and Sanitary</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/concreterepair'><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={crack} alt="crack" width="30" height="30"></img>Concrete Cracks Repair</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/waterproof'><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={waterproof} alt="waterproof" width="30" height="30"></img>Waterproofing</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to='/mechanical'><Button variant="contained" ><img style={{marginRight: '10px'}}src={repair} alt="repair" width="30" height="30"></img>Mechanical and Electrical</Button>
        </Link>
          </div>
        {/* <Stack spacing={3}>
        <Item><img className="image" src={renovation} alt="renovation" width="30" height="30"></img>Renovation</Item>
        <Item>Window</Item>
        <Item>Plumbing and Sanitary</Item>
        <Item>Concrete Repair</Item>
        <Item>Waterproofing</Item>
        <Item>Mechanical and Electrical</Item>
      </Stack> */}
    </div>
    </div>
    </div>
    </>
    )













}