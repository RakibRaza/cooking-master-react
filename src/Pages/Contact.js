import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import contactBg from "../images/hero-bg.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${contactBg}') no-repeat center/cover`,
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm" component={Box} py={2}>
        <Paper component={Box} p={3}>
          <Typography variant="h5">Create new account !</Typography>
          <TextField
            variant="outlined"
            label="First name"
            placeholder="Enter your first name"
            fullWidth
            color="secondary"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Email"
            placeholder="Enter your email"
            fullWidth
            color="secondary"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="secondary" />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Message"
            placeholder="Enter your Message"
            fullWidth
            color="secondary"
            margin="normal"
            rows={4}
            multiline
            helperText="Maximun 140 Caracters"
          ></TextField>
          <FormControl>
            <FormControlLabel label="Keep me remember" control={<Checkbox />} />
          </FormControl>
          <Box mt={2}>
            <Button size="large" variant="contained" color="secondary">
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Contact;
