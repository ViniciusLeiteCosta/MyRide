import React from 'react';
import Logo from "../../assets/img/Logo.jpg";
import notificationsIcon from "../../assets/img/bell-icon.png"
import profilePicture from "../../assets/img/person.png"
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

const navbarStyle = {
  background:'#242424',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center', 
  textDecoration: 'none', 
  color: 'white', 
  height: '100%', 
};

const toolbarStyle = {
  display: 'flex',
  alignItems: 'center', 
}

const userAvatarStyle = {
  borderRadius: '36px',
  background: `url(${profilePicture}) lightgray 50% / cover no-repeat`,
  width: '36px',
  height: '36px',
}

const Navbar = () => {
  return (
    <AppBar style={navbarStyle} elevation={0}>
      <Toolbar style={toolbarStyle}>
      
          <Grid item xs={1}>
            <a href="/"> 
              <img src={Logo} alt="Logo" />
            </a>
          </Grid>
        
        <Grid container justifyContent="center">
          
          <Grid item xs={1} container justifyContent="center">
            <a href="/" style={linkStyle}> 
              <Typography>Home</Typography>
            </a>
          </Grid>

          <Grid item xs={1} container justifyContent="center">
            <a href="/" style={linkStyle}> 
              <Typography>Getting a Taxi</Typography>
            </a>
          </Grid>

          <Grid item xs={1} container justifyContent="center">
            <a href="/" style={linkStyle}> 
              <Typography>Mobile App</Typography>
            </a>
          </Grid>

          <Grid item xs={1} container justifyContent="center">
            <a href="/" style={linkStyle}> 
              <Typography>Contact Us</Typography>
            </a>

          </Grid>
        </Grid>

        <Grid item xs={1} container justifyContent="center">
            <a href="/"> 
              <img src={notificationsIcon} alt="Notifications" />
            </a>
        </Grid>

        <Grid item xs={1}>
            <a href="/"> 
              <img style={userAvatarStyle} src={profilePicture} alt="Your Account" />
            </a>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
