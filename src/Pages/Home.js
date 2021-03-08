import { Box, Container } from "@material-ui/core";
import React from "react";
import Meals from "../components/Meals";
import Search from "../components/Search";

const Home = () => {
  return (
    <Container component={Box} py={4}>
      <Search />
      <Meals />
    </Container>
  );
};

export default Home;
