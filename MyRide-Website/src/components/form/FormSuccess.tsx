import React from 'react';
import { Typography, Container, Button } from '@mui/material';


const defaultContainer = {
  background: '#282828',
  borderRadius: '10px',
};

const buttonStyle = {
  display: 'flex',
  width: '200px',
  height: '56px',
  background: '#FBA403',
  margin: '24px 0 30px 480Px',
}

const typographyStyle = {
  display: 'flex',
  justifyContent: 'center',
  color: '#FBA403',
}

interface FormSuccessProps {
  fullname: string;
  email: string;
  country: string;
  city: string;
  referral: string;
  ownsCar: boolean;
  carType?: string;
  onReset: () => void;
}

const FormSuccess: React.FC<FormSuccessProps> = ({
  fullname,
  email,
  country,
  city,
  referral,
  ownsCar,
  carType,
  onReset, 
}) => {
  return (
    <Container style={defaultContainer}>
      <Typography style={typographyStyle} variant="h6">REGISTRATION SUCCESS:</Typography>
      <Typography style={typographyStyle}>Full Name: {fullname}</Typography>
      <Typography style={typographyStyle}>Email: {email}</Typography>
      <Typography style={typographyStyle}>Country: {country}</Typography>
      <Typography style={typographyStyle}>City: {city}</Typography>
      <Typography style={typographyStyle}>Referral Code: {referral}</Typography>
      <Typography style={typographyStyle}>Driver: {ownsCar ? 'YES' : 'NO'}</Typography>
      {ownsCar && carType && <Typography style={typographyStyle}>Car Type: {carType}</Typography>}
      <Button
        variant="contained"
        onClick={onReset} 
        style={buttonStyle}
      >
        Submit a new car
      </Button>
    </Container>
  );
};

export default FormSuccess;
