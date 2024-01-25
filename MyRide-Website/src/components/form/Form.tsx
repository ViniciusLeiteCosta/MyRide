import { Container, TextField, Typography, Grid, Button } from "@mui/material";
import formImage from "../../assets/Popup image.png";
import carSVG1 from "../../assets/Card Image1.svg";
import carSVG2 from "../../assets/Card Image2.svg";
import carSVG3 from "../../assets/Card Image3.svg";
import carSVG4 from "../../assets/Card Image4.svg";

//Styles
const form = {
  maxWidth: "100%",
  display: "flex",
  paddingTop: "101px",
  padding: "30px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "24px",
};

const formHeader = {
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "30px",
  // border: 'solid red',
};

const defaultContainer = {
  // border: 'solid white',
  background: "#282828",
  borderRadius: "10px",
};

const typographyStyle = {
  display: "flex",
  justifyContent: "flex-start",
};

const textfieldStyle = {
  display: "flex",
  justifyContent: "flex-start",
  border: "solid purple",
  margin: "24px 0 0 -30px",

  "& label.Mui-focused": {
    color: "#FBA403",
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF",
  },
  "&:hover .MuiInputLabel-root": {
    color: "#FBA403",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      transition: "0.5s",
      borderColor: "#5d5d5d",
    },
    "&:hover fieldset": {
      borderColor: "#FBA403",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FBA403",
    },
  },
};

const optionCard = {
  display: "flex",
  flexDirection: "column", 
  margin: "5px",
  width: "130px",
  height: "80px",
  border: "1px solid #FFF",
  borderRadius: "4px",
  cursor: "pointer",
};

const carButtons = {
  display: "flex",
  flexDirection: "row",
  marginLeft: "-60px",
  b: "#FFF",
};

const submitButtonStyle = {
  display: "flex",
  width: "200px",
  height: "56px",
  background: "#FBA403",
  margin: "24px 0 30px -30px",
};

const Form = () => {
  return (
    <div>
      <Container style={form}>
        <Container style={defaultContainer}>
          <Grid style={formHeader} container alignItems="center" spacing={2}>
            <Grid item>
              <img src={formImage} alt="Drive with MyRide" />
            </Grid>

            <Grid item>
              <Typography
                style={typographyStyle}
                variant="h5"
                color={{ color: "#FBA403" }}
              >
                Drive with MyRide
              </Typography>
              <Typography style={typographyStyle}>
                Register as a driver using the form below. Our team will assess
                and get back to you within 48 hours.
              </Typography>
            </Grid>
          </Grid>

          <Container>
            <TextField
              sx={textfieldStyle}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              label="Full Name"
              alt="Full Name"
            ></TextField>

            <TextField
              sx={textfieldStyle}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              label="Email Address"
              alt="Email Address"
            ></TextField>

            <TextField
              sx={textfieldStyle}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              label="Country"
              alt="Country"
            ></TextField>

            <TextField
              sx={textfieldStyle}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              label="City"
              alt="City"
            ></TextField>

            <TextField
              sx={textfieldStyle}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              label="Referral Code"
              alt="Referral Code"
            ></TextField>

            <Typography
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "24px 0 24px -30px",
              }}
              alt="I drive my own car"
            >
              I drive my own car
            </Typography>

            <Typography
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "24px 0 16px -30px",
                color: "#FBA403",
              }}
              variant="h6"
              alt="Select your car type"
            >
              Select your car type
            </Typography>

            <Container style={carButtons}>
              <Button style={optionCard}>
                <img alt="Sedan" src={carSVG1}></img>Sedan
              </Button>
              <Button style={optionCard}>
                <img alt="SUV/Van" src={carSVG2}></img>SUV/Van
              </Button>
              <Button style={optionCard}>
                <img alt="Semi Luxury" src={carSVG3}></img>Semi Luxury
              </Button>
              <Button style={optionCard}>
                <img alt="Luxury Car" src={carSVG4}></img>Luxury Car
              </Button>
            </Container>

            <Button
              variant="contained"
              style={submitButtonStyle}
              alt="Submit Button"
            >
              SUBMIT
            </Button>
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default Form;
