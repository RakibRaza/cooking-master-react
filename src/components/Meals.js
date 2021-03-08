import { Grid } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../context";
import Meal from "./Meal";
import NoMatch from "./NoMatch";
import Preloader from "./Preloader";

const Meals = () => {
  const { isLoading, meals } = useGlobalContext();

  if (isLoading) {
    return <Preloader />;
  }
  if (meals.length < 1) {
    return <NoMatch />;
  }
  return (
    <Grid container spacing={3} justify="center">
      {meals.map((meal) => {
        return <Meal key={meal.idMeal} {...meal} />;
      })}
    </Grid>
  );
};

export default Meals;
