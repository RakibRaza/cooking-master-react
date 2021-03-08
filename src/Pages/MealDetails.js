import {
  Box,
  Button,
  Container,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [id]);
  if (meal.length === 0) {
    return <Preloader />;
  }
  const { strMeal, strMealThumb, strInstructions } = meal[0];
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[0]["strIngredient" + i]) {
      ingredients.push(
        `${meal[0]["strIngredient" + i]} - ${meal[0]["strMeasure" + i]}`
      );
    } else {
      break;
    }
  }

  return (
    <Paper component={Box} py={8}>
      <Container>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item md={6}>
            <img width="100%" src={strMealThumb} alt={strMeal} />
          </Grid>
          <Grid item md={6}>
            <Typography align="center" gutterBottom variant="h4">
              {strMeal}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Instructions :-
            </Typography>
            <Typography paragraph>{strInstructions}</Typography>
            <Typography variant="h5" gutterBottom>
              Ingredients :-
            </Typography>

            {ingredients.map((ing, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  <CheckBoxIcon color="secondary" />
                </ListItemIcon>
                <ListItemText primary={ing} />
              </ListItem>
            ))}

            <Box mt={3}>
              <Button
                size="large"
                component={Link}
                to="/"
                variant="contained"
                color="secondary"
              >
                Back Home
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default MealDetails;
