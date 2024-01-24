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
  display: 'flex',
  padding: '0px 12px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
}
const bookingSection = () => {
  return (
    <div>     
      <Container style={BookingSegment} >
            
            <img style={imageStyle} src={CarImage} alt="Yellow Car"></img>
            
            {/* Container Form */}
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
                  <TextField style={textfieldStyle} label="Your Pickup" variant="filled" fullWidth />
                  <TextField label="Your Destination" variant="filled" fullWidth style={{ marginTop: '10px' }} />
                </Container>
              </Container>
            </Container>
          </Container>
    </div>
  )
}

export default bookingSection