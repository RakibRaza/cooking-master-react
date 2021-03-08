import { CssBaseline, ThemeProvider } from "@material-ui/core";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

import MealDetails from "./Pages/MealDetails";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { theme } from "./Theme";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/meal/:id">
            <MealDetails />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Footer />
        <CssBaseline />
      </Router>
    </ThemeProvider>
  );
}

export default App;
