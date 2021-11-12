import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./LoadingPage.css";


export default function LoadingPage() {
  

  return (
    <div id="modal" className="overlay">
      <div className="overlay-content"><CircularProgress /></div>
    </div>
);
};