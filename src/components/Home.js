import React from "react";
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import renovation from '../image/renovation.png';
import window from '../image/windows.png';
import plumbing from '../image/plumbing.png';
import waterproof from '../image/waterproof.png';
import repair from '../image/repair.png';
import crack from '../image/crack.png';
import "./Home.css";





export default function Home() {

    localStorage.clear();

    const categories = {
      renovation: 'renovation',
      windows: 'RW01',
      plumbing: 'ME12',
      concreterepair: 'CR05',
      waterproof: 'CR13',
      aircon: 'ME01',
    }


    return (
        <>
        <div className="outer">
        <div className="Home">
        <div className="list">
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.renovation}><Button sx={{width: 250}}variant="contained" ><img style={{marginRight: '10px'}}src={renovation} alt="renovation" width="30" height="30"></img>Renovation</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.windows}><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={window} alt="window" width="30" height="30"></img>Window</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.plumbing}><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={plumbing} alt="plumbing" width="30" height="30"></img>Plumbing and Sanitary</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.concreterepair}><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={crack} alt="crack" width="30" height="30"></img>Concrete Cracks Repair</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.waterproof}><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={waterproof} alt="waterproof" width="30" height="30"></img>Waterproofing</Button>
        </Link>
          </div>
          <div className="inner">
          <Link style={{ textDecoration: 'none' }} to={"/" + categories.aircon}><Button sx={{width: 250}} variant="contained" ><img style={{marginRight: '10px'}}src={repair} alt="repair" width="30" height="30"></img>Air-conditioning (M&E)</Button>
        </Link>
          </div>
        </div>
      </div>
    </div>
    </>
    )













}