import { Typography, Container, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import ClearIcon from '../../assets/close.png';
import CarImage from '../../assets/img/sectionCarImage.png';
import magnifierIcon from '../../assets/magnifierIcon.png'
import React from 'react';

const textFindButtonStyle = {
  display: 'flex',
  width: '529px',
  height: '56px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  color: '#FFF',
}

const findButtonStyle = {
  background: '#FBA403',
}

const BookingSegment = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'row' as const,
  padding: '74px 89px 74px 89px',
};

const imageStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '610px',
  height: '593px',
};

const bookingForm = {
  display: 'flex',
  flexDirection: 'row' as const,
  justifyContent: 'center',
};

const typographyForm = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  backgroundColor: '#2C2C2C',
  gap: '16px',
  width: '600px',
  padding: '20px',
  marginTop: '30px',
  borderRadius: '4px',
};

const typographyStyle = {
  color: '#FFF',
  fontSize: '26px',
  fontStyle: 'normal' as const,
  fontWeight: '400',
  lineHeight: 'normal' as const,
  letterSpacing: '-0.25px',
  whiteSpace: 'nowrap',

};

const textfieldStyle = {
  '& label.Mui-focused': {
    color: '#FBA403',
  },
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '&:hover .MuiInputLabel-root': {
    color: '#FBA403',
  },
  '& .MuiOutlinedInput-root': {
    '& input': {
      color: '#FFF', 
    },
    '& fieldset': {
      transition: '0.5s',
      borderColor: '#5d5d5d',
    },
    '&:hover fieldset': {
      borderColor: '#FBA403',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FBA403',
    },
  },
};

const bookingSection = () => {

  const [currentLocation, setCurrentLocation] = React.useState(''); 
  const [destination, setDestination] = React.useState(''); 

  const handleClearCurrentLocation = () => {
    setCurrentLocation(''); 
  };

  const handleClearDestination = () => {
    setDestination(''); 
  };

  return (
    <div>
      <Container style={BookingSegment}>
        <Container style={bookingForm}>
          <img style={imageStyle} src={CarImage} alt='Yellow Car'></img>

          <Container style={typographyForm}>
            <Typography align='left' variant='h4' style={typographyStyle}>
              Need a ride?
            </Typography>
            <Typography align='left' variant='h4' style={typographyStyle}>
              Book with <span style={{fontStyle: 'italic', color: '#FBA403'}}>myRIDE</span> now!
            </Typography>

            <Container style={formStyle}>
              <Typography>Find a ride now</Typography>
              <TextField
                sx={textfieldStyle}
                id='outlined-basic'
                variant='outlined'
                label='Current Location'
                value={currentLocation} 
                onChange={e => setCurrentLocation(e.target.value)}
                fullWidth
                InputProps={{
                  endAdornment: (
                    currentLocation && (
                      <InputAdornment position="end">
                        <IconButton  onClick={handleClearCurrentLocation}>
                          <img src={ClearIcon} alt="Clear" />
                        </IconButton>
                      </InputAdornment>
                    )
                  ),
                }}
              />
              <TextField
                sx={textfieldStyle}
                id='outlined-basic'
                variant='outlined'
                label='Your Destination'
                value={destination} 
                onChange={e => setDestination(e.target.value)}
                fullWidth
                style={{ marginTop: '10px' }}
                InputProps={{
                  endAdornment: (
                    destination && (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClearDestination}>
                          <img src={ClearIcon} alt="Clear" />
                        </IconButton>
                      </InputAdornment>
                    )
                  ),
                }}
              />
              <Button style={findButtonStyle} variant="outlined">
                <Typography style={textFindButtonStyle}><img src={magnifierIcon} alt='find a driver' />find a driver</Typography>
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default bookingSection;
