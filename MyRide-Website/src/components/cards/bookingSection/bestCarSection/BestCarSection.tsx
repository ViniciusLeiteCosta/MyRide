// import React from "react";
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from "@mui/material";
import Car1 from "../../../../assets/car1.jpg";
import Car2 from "../../../../assets/car2.jpg";
import Car3 from "../../../../assets/car3.jpg";
import Car4 from "../../../../assets/car4.jpg";

// Styles
const titleStyle = {
  color: '#FBA403', 
};

const cardStyle = {
  maxWidth: '331px',
  background: '#403c3c',
};

const cardMediaStyle = {
  height: '190px',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'right',
  color: '#FBA403',
  backgroundColor: '#403c3c',
};
  
const buttonHoverStyle = {
  '&:hover': {
    backgroundColor: '#585454',
    border: 'none',

  },
};

const LearnMoreClick = (searchCar: string) => {
    window.open(`https://www.google.com/search?q=${searchCar}`, '_blank');
};

const BestCarSection: React.FC = () => {
  
    interface Car {
        image: string;
        title: string;
        description: string;
        searchCar: string;
    }

    // Creating an array with all Cars
  const cars: Car[] = [
    {
      image: Car1,
      title: "Basic",
      description:
        "The best balance of price and comfort. You will not go wrong with our basic rides.",
      searchCar: "Basic+car"
    },
    {
      image: Car2,
      title: "Comfort",
      description:
        "If comfort is your priority, this is the ride for you. It’s spacious and packed with features.",
      searchCar: "Comfort+car"
    },
    {
      image: Car3,
      title: "Business",
      description:
        "Do you want to travel around the city in style? Make sure to select or business class rides.",
      searchCar: "Business+car"
    },
    {
      image: Car4,
      title: "Deluxe",
      description:
        "The best ride for luxury and comfort. No compromises here. You’ll surely get what you pay for.",
      searchCar: "Deluxe+car"
    },
  ];

  return (
    <div>

      <Typography style={titleStyle} variant="h6" gutterBottom>
        WHY YOU SHOULD RIDE WITH US?
      </Typography>

      <Typography variant="h4" gutterBottom>
        Best in class rides
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        
            {cars.map((car, index) => (
            
                <Grid item xs={12} sm={6} md={3} key={index}>
                    
                    <Card style={cardStyle}>
                    
                    <CardMedia style={cardMediaStyle} image={car.image} title={car.title}/>
                    
                    <CardContent>

                        <Typography gutterBottom variant="h5" color="#FFF" fontSize="16px" fontWeight="500" align="left">
                            {car.title}
                        </Typography>

                        <Typography variant="body2" color="#B3B3B3" fontSize="16px" fontWeight="400" align="left"> 
                            {car.description}
                        </Typography>

                    </CardContent>
                    
                    <CardActions>
                            <Button style={{ ...buttonStyle, ...buttonHoverStyle }} size="small" onClick={() => LearnMoreClick(car.searchCar)}>
                                Learn More
                            </Button>
                    
                    </CardActions>
                    </Card>
                
                </Grid>
            ))}

        </Grid>

    </div>
  );
};

export default BestCarSection;
