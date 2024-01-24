import React from 'react';
import { Typography, Container, Grid, Box, Link } from '@mui/material';
import WhiteLogo from '../../assets/img/WhiteLogo.png';
import FacebookIcon from '../../assets/Facebook.png';
import InstagramIcon from '../../assets/Instagram.png';
import TwitterIcon from '../../assets/Twitter.png';

// Styles
const textStyle = {
  marginBottom: '20px',
  color: '#B3B3B3',
};

const socialIconStyle = {
  marginRight: '24px',
};

const headerStyle = {
    marginBottom: '20px', 
}

const linkStyle = {
  color: '#FFF',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '12px',
};

const linkContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px', 
  };

const Footer = () => {
  return (
    <Box sx={{ background: '#242424', color: '#FFF', padding: '40px 80px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: 3 }}>
              <Link href="/" style={{ marginBottom: '20px' }}>
                <img src={WhiteLogo} alt="Logo" />
              </Link>
              <Typography variant="body1" style={textStyle}>
                MyRide Inc., 2nd Floor, New York, NY 10016
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Link href="/" style={socialIconStyle}>
                  <img src={FacebookIcon} alt="Facebook" />
                </Link>
                <Link href="/" style={socialIconStyle}>
                  <img src={InstagramIcon} alt="Instagram" />
                </Link>
                <Link href="/" style={{ ...socialIconStyle, marginRight: '0' }}>
                  <img src={TwitterIcon} alt="Twitter" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={2}>
              <Grid item xs={4} style={linkContainerStyle}>
                <Typography variant="h6" style={headerStyle}>Company</Typography>
                <Link href="/" style={linkStyle}>About Us</Link>
                <Link href="/" style={linkStyle}>News</Link>
                <Link href="/" style={linkStyle}>Careers</Link>
                <Link href="/" style={linkStyle}>How we work</Link>
              </Grid>
              <Grid item xs={4} style={linkContainerStyle}>
                <Typography variant="h6" style={headerStyle}>Support</Typography>
                <Link href="/" style={linkStyle}>FAQ</Link>
                <Link href="/" style={linkStyle}>US Office</Link>
                <Link href="/" style={linkStyle}>Asia Office</Link>
                <Link href="/" style={linkStyle}>Help Center</Link>
              </Grid>
              <Grid item xs={4} style={linkContainerStyle}>
                <Typography variant="h6" style={headerStyle}>More</Typography>
                <Link href="/" style={linkStyle}>Become a partner</Link>
                <Link href="/" style={linkStyle}>Partner Support</Link>
                <Link href="/" style={linkStyle}>Mobile app links</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
