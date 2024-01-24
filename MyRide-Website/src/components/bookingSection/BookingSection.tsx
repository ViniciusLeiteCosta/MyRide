import { Typography, Container, TextField } from '@mui/material'
import CarImage from "../../assets/img/sectionCarImage.png"

const BookingSegment = {
  display: 'flex', 
  justifyContent: 'flex-end',
  flexDirection: 'row' as const,
  padding: '74px 89px 74px 89px',
  border: 'solid green',
}

const imageStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '610px',
  height: '593px',
  border: 'solid red'
}

const bookingForm = {
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'flex-end',
  border: 'solid blue',
}

const typographyForm = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  border: 'solid yellow',
}

const formStyle = {
  display: 'flex',
  padding: '30px 33px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  alignSelf: 'stretch',
  backgroundColor: '#2C2C2C',
}

const typographyStyle = {
  color: '#FFF',
  fontSize: '26px',
  fontStyle: 'normal' as const,
  fontWeight: '400',
  lineHeight: 'normal' as const,
  letterSpacing: '-0.25px',
  textTransform: 'uppercase' as const,
  whiteSpace: 'nowrap',
}

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
  return (
    <div>     
      <Container style={BookingSegment} >
            
            <img style={imageStyle} src={CarImage} alt="Yellow Car"></img>
            
            <Container style={bookingForm} > 

              <Container style={typographyForm}>
              
                <Typography align='left' variant='h4' style={typographyStyle}>
                  Need a ride?
                </Typography>
                <Typography align='left' variant='h4' style={typographyStyle}>
                  Book with myRIDE now!
                </Typography>
            
                <Container style={formStyle}>
                  <Typography>Find a ride now</Typography> 
                  <TextField sx={textfieldStyle} id="outlined-basic" label="Outlined" variant="outlined" label="Your Pickup"  fullWidth />
                  <TextField sx={textfieldStyle} id="outlined-basic" label="Outlined" variant="outlined" label="Your Destination"  fullWidth style={{ marginTop: '10px' }} />
                </Container>
              </Container>
            </Container>
          </Container>
    </div>
  )
}

export default bookingSection