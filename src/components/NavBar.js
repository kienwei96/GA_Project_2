import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export default function NavBar() {

    return (
      <Box sx={{ flexGrow: 1, minWidth: '100%' }}>
        <AppBar position="static">
          <Toolbar sx={{ width: '80%', maxWidth: '1800px', margin: '0 auto', height: '80px' }}>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1, fontWeight: 600, }}>
            <Link to='/' style={{textDecoration: 'none', color: 'inherit'}} onClick={() => {window.location.href='https://kienwei96.github.io/GA_Project_2/#/'}}><Button color="inherit">Contractor Finder</Button></Link>
            </Typography>
            <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}><Button color="inherit">Home</Button></Link>
            <Link to='/search' style={{textDecoration: 'none', color: 'inherit'}}><Button color="inherit">Search</Button></Link>
            <Link to='/about' style={{textDecoration: 'none', color: 'inherit'}}><Button color="inherit">About</Button></Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }