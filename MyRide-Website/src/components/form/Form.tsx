import React, { useState} from 'react';
import { Container, TextField, Typography, Grid, Button, MenuItem, Select, Switch, RadioGroup, FormControlLabel, Radio} from '@mui/material';
import formImage from '../../assets/Popup image.png';
import carSVG1 from '../../assets/Card Image1.svg';
import carSVG2 from '../../assets/Card Image2.svg';
import carSVG3 from '../../assets/Card Image3.svg';
import carSVG4 from '../../assets/Card Image4.svg';
import countriesAndCities from '../../data/countries-and-cities.json';
import FormSuccess from '../form/FormSuccess.tsx'; 

const form = {
  maxWidth: '100%',
  display: 'flex',
  paddingTop: '101px',
  padding: '30px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '24px',
};

const formHeader = {
  display: 'flex',
  justifyContent: 'flex-start',
  marginTop: '30px',
};

const defaultContainer = {
  background: '#282828',
  borderRadius: '10px',
};

const typographyStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '30px',
}

const textfieldStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '24px 0 0 -30px',

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

const optionCard = {
  display: 'flex',
  flexDirection: 'column', 
  margin: '5px',
  width: '130px',
  height: '80px',
  border: '1px solid #FFF',
  borderRadius: '4px',
  cursor: 'pointer',
};

const carButtons = {
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '-35px',
  b: '#FFF',
};

const countrySelectStyle = {

    display: 'flex',
    textAlign: 'left', 
    flexDirection: 'left',
    justifyContent: 'flex-start',
    margin: '24px -25px 0 -54px',
    
    '& fieldset': {
        borderColor: '#5d5d5d', 
      },

    '&.MuiOutlinedInput-notchedOutline': {  
        transition: '0.5s',
        borderColor: '#5d5d5d',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        transition: '0.5s',
        borderColor: '#FBA403', 
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#FBA403', 
      },
      '& .MuiSelect-select': {
        transition: '0.5s',
        color: '#FFF', 
      },
      '&:hover .MuiSelect-select': {
        transition: '0.5s',
        color: '#FBA403', 
      },
      '& .MuiSvgIcon-root': { 
        color: '#FFF',
      },
      background: '#282828', 
}

const submitButtonStyle = {
  display: 'flex',
  width: '200px',
  height: '56px',
  background: '#FBA403',
  margin: '24px 0 30px -30px',
};

const switchStyle = {
  '& .MuiSwitch-switchBase': {
    color: '#FBA403', 
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#FBA403', 
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#FBA403', 
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#5d5d5d', 
  },
};

const carRadioStyle = {
  ...optionCard,
};
 
    const Form: React.FC = () => {
      const [formState, setFormState] = useState({
        fullname: '',
        email: '',
        country: '',
        city: '',
        referral: '',
        ownsCar: false,
        carType: ''
      });
    
      const [errors, setErrors] = useState({
        fullname: '',
        email: '',
        country: '',
        city: '',
        referral: '',
        carType: ''
      });

      const [submitted, setSubmitted] = useState(false);

      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const validateFullName = (name: string) => /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/.test(name);
      const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const validateReferralCode = (code: string) => /^[A-Z]{3}-\d{3}$/.test(code);
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = event.target as { name: string, value: string };
        setFormState({ ...formState, [name]: value });
      };
    
      const handleOwnsCarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, ownsCar: event.target.checked });
      };
    
      const handleCarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, carType: event.target.value });
      };
    
      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsSubmitting(true);

        let formIsValid = true;
        const newErrors = {
          fullname: '',
          email: '',
          country: '',
          city: '',
          referral: '',
          carType: '',
        };

  
        if (!validateFullName(formState.fullname)) {
          newErrors.fullname = 'Invalid name';
          formIsValid = false;
        }

        if (!validateEmail(formState.email)) {
          newErrors.email = 'Invalid email';
          formIsValid = false;
        }

        if (!validateReferralCode(formState.referral)) {
          newErrors.referral = 'Invalid code';
          formIsValid = false;
        }

        if (!formState.country) {
          newErrors.country = 'Country is required';
          formIsValid = false;
        }

        if (!formState.city) {
          newErrors.city = 'City is required';
          formIsValid = false;
        } else if (!formState.country) {
          newErrors.city = 'Select a country first';
          formIsValid = false;
        }

        if (formState.ownsCar && !formState.carType) {
          newErrors.carType = 'Car type is required';
          formIsValid = false;
        }

        setErrors(newErrors);

        if (!formIsValid) {
          setIsSubmitting(false);
          return;
        }

        try {
          const response = await fetch('http://localhost:3000/cars', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
          });

          if (response.ok) {
            setSubmitted(true);
          } else {
            throw new Error('Failed to submit the form');
          }
        } catch (error) {
          console.error('Error trying to send the data', error);
        } finally {
          setIsSubmitting(false);
        }
      };

      const resetForm = () => {
        setFormState({
          fullname: '',
          email: '',
          country: '',
          city: '',
          referral: '',
          ownsCar: false,
          carType: ''
        });
        setErrors({
          fullname: '',
          email: '',
          country: '',
          city: '',
          referral: '',
          carType: ''
        });
        setSubmitted(false);
      };


      if (submitted) {
        return (
          <FormSuccess
            fullname={formState.fullname}
            email={formState.email}
            country={formState.country}
            city={formState.city}
            referral={formState.referral}
            ownsCar={formState.ownsCar}
            carType={formState.carType}
            onReset={resetForm}
          />
        );
      }
 
  return (
    <div>
      <Container style={form}>
        <Container style={defaultContainer}>
          <Grid style={formHeader} container alignItems='center' spacing={2}>
            <Grid item>
              <img src={formImage} alt='Drive with MyRide' />
            </Grid>

            <Grid item>
              <Typography
                style={typographyStyle}
                variant='h5'
                color={{ color: '#FBA403' }}
              >
                Drive with MyRide
              </Typography>
              <Typography style={typographyStyle}>
                Register as a driver using the form below. Our team will assess
                and get back to you within 48 hours.
              </Typography>
            </Grid>
          </Grid>

          <form style={formStyle} onSubmit={handleSubmit}>
            <TextField
              sx={textfieldStyle}
              name='fullname'
              label='Full Name'
              variant='outlined'
              value={formState.fullname}
              onChange={handleInputChange}
              error={!!errors.fullname}
              helperText={errors.fullname}
            />
            <TextField
              sx={textfieldStyle}
              name='email'
              label='Email Address'
              variant='outlined'
              value={formState.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <Container>
              <Select
                labelId='country-label'
                name='country'
                value={formState.country}
                onChange={handleInputChange}
                displayEmpty
                sx={countrySelectStyle}
              >
                <MenuItem value='' disabled>
                  Country
                </MenuItem>
                {Object.keys(countriesAndCities).map((country) => (
                  <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
              </Select>
            </Container>
            <TextField
              sx={textfieldStyle}
              name='city'
              label='City'
              variant='outlined'
              value={formState.city}
              onChange={handleInputChange}
              error={!!errors.city}
              helperText={errors.city}
            />
            <TextField
              sx={textfieldStyle}
              name='referral'
              label='Referral Code'
              variant='outlined'
              value={formState.referral}
              onChange={handleInputChange}
              error={!!errors.referral}
              helperText={errors.referral}
            />
            <Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '24px 0 24px -30px' }} alt='I drive my own car'>
              I drive my own car
              <Switch
                sx={switchStyle}
                checked={formState.ownsCar}
                onChange={handleOwnsCarChange}
                name='ownsCar'
              />
            </Typography>
            {formState.ownsCar && (
              <RadioGroup row value={formState.carType} onChange={handleCarChange} style={carButtons}>
                <FormControlLabel
                  value='sedan'
                  control={<Radio icon={<img alt='Sedan' src={carSVG1} />} checkedIcon={<img alt='Sedan' src={carSVG1} />} />}
                  label='Sedan'
                  style={carRadioStyle}
                />
                <FormControlLabel
                  value='suv_van'
                  control={<Radio icon={<img alt='SUV/Van' src={carSVG2} />} checkedIcon={<img alt='SUV/Van' src={carSVG2} />} />}
                  label='SUV/Van'
                  style={carRadioStyle}
                />
                <FormControlLabel
                  value='semi_luxury'
                  control={<Radio icon={<img alt='Semi Luxury' src={carSVG3} />} checkedIcon={<img alt='Semi Luxury' src={carSVG3} />} />}
                  label='Semi Luxury'
                  style={carRadioStyle}
                />
                <FormControlLabel
                  value='luxury_car'
                  control={<Radio icon={<img alt='Luxury Car' src={carSVG4} />} checkedIcon={<img alt='Luxury Car' src={carSVG4} />} />}
                  label='Luxury Car'
                  style={carRadioStyle}
                />
              </RadioGroup>
              
            )}
            <Button
              variant='contained'
              style={submitButtonStyle}
              type='submit'
              disabled={isSubmitting}
            >
              SUBMIT
            </Button>
          </form>
        </Container>
      </Container>
    </div>
  );
};

export default Form;