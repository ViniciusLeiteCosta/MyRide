import Logo from '../../assets/img/Logo.jpg';
import notificationsIcon from '../../assets/img/bell-icon.png';
import profilePicture from '../../assets/img/person.png';
import { AppBar, Toolbar, Typography } from '@mui/material';

const navbarStyle = {
  background: '#242424',
};

const logoStyle = {
  marginRight: 'auto',
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  listStyleType: 'none',
  color: 'white',
  height: '100%',
  margin: '0 20px',
};

const notificationStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
};

const toolbarStyle = {
  display: 'flex',
  alignItems: 'center',
};

const userAvatarStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '36px',
  background: `url(${profilePicture}) lightgray 50% / cover no-repeat`,
  width: '36px',
  height: '36px',
};

const separatorStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '0.7px',
  height: '29.714px',
  background: '#333',
  marginLeft: '20px',
  marginRight: '20px',
};

const Navbar = () => {
  return (
    <nav>
      <AppBar role='navigation' position='static' style={navbarStyle} elevation={0}>
        <Toolbar style={toolbarStyle}>
          <a href='/' style={logoStyle}>
            <img src={Logo} alt='Logo' />
          </a>

        <ul style={linkStyle}>
          <li>
            <a href='/' style={linkStyle}>
              <Typography>Home</Typography>
            </a>
          </li>
          
          <li>
            <a href='/' style={linkStyle}>
              <Typography>Getting a Taxi</Typography>
            </a>
          </li>
          
          <li>
            <a href='/' style={linkStyle}>
              <Typography>Mobile App</Typography>
            </a>
          </li>
          
          <li>          
            <a href='/' style={linkStyle}>
              <Typography>Contact Us</Typography>
            </a>
          </li>
        </ul>

            <a href='/' style={notificationStyle}>
              <img src={notificationsIcon} alt='Notifications' />
            </a>

            <div style={separatorStyle}></div>

            <a href='/'>
              <img style={userAvatarStyle} src={profilePicture} alt='Your Account' />
            </a>
        
        </Toolbar>
      </AppBar>
    </ nav>
  );
};

export default Navbar;
