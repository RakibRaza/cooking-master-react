import React, { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink, useHistory } from "react-router-dom";
import { red } from "@material-ui/core/colors";
const useStyles = makeStyles((theme) => ({
  avater: {
    background: red[500],
  },
  hert: {
    color: red[500],
  },
}));
const Meal = ({
  idMeal,
  strMeal,
  strArea,
  strCategory,
  strInstructions,
  strMealThumb,
}) => {
  let history = useHistory();
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Grid item sm={6} md={4}>
      <Card
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          avatar={<Avatar className={classes.avater}>M</Avatar>}
          title={strArea}
          subheader={strCategory}
          action={
            <IconButton onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? (
                <FavoriteIcon className={classes.hert} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          }
        />
        <CardActionArea onClick={() => history.push(`/meal/${idMeal}`)}>
          <CardMedia
            component="img"
            alt={strMeal}
            height="250"
            image={strMealThumb}
            title={strMeal}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {strMeal}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`${strInstructions.slice(0, 300)}......`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ marginTop: "auto", justifyContent: "center" }}>
          <Button
            component={NavLink}
            to={`/meal/${idMeal}`}
            variant="outlined"
            size="large"
            color="secondary"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Meal;
