// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import styles
import "./App.css";
// Import components
import HomePage from "./scenes/Home.jsx";
import OrderPage from "./scenes/Order.jsx";

// Create component
const App = () => {
  return (
    <Switch>
      <Route exact path={`/pizza`}>
        <OrderPage />
      </Route>
      <Route exact path={`/`}>
        <HomePage />
      </Route>
    </Switch>
  );
};

// Export component
export default App;
