import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

import { useGlobalContext } from "../context";

const useStyles = makeStyles((theme) => ({
  form: {
    background: "#fff",
    borderRadius: theme.spacing(1),
  },
}));

const Search = () => {
  const { keyword, setKeyword, fetchMeals } = useGlobalContext();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      fetchMeals(keyword);
    }
    setKeyword("");
  };
  return (
    <Container
      className={classes.form}
      maxWidth="sm"
      component={Box}
      mb={2}
      p={2}
    >
      <form>
        <Grid container spacing={2}>
          <Grid xs={12} sm={8} item>
            <TextField
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              fullWidth
              label="Search your favorite meal"
              size="small"
              variant="outlined"
            />
          </Grid>
          <Grid xs={12} sm={4} item>
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="outlined"
              size="large"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Search;
