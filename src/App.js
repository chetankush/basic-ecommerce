import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./LoginPage";
import Orders from "./Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Carouselcontainer from "./Carouselcontainer";
import Footer from "./Footer";
// import CarouselComponent from "./carousel.component";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IkzH9SD76ru0KuTCH469XUsf7PtUzQkwQyGomSKZbqkXJAo5I5cP6htnm4zvXZDkikj445CLaekmJ7rHzPgctZ900TeENYKWo"
);
function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Orders">
            <Orders />
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// - example Endpoint

// http://localhost:5001/the-local-store-e40b7/us-central1/api
