import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./componnent/Navbar";
import "./App.css";
import Home from "./componnent/pages/Home";
import Services from "./componnent/pages/Services";
import Products from "./componnent/pages/Products";
import SignUp from "./componnent/pages/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </>
  );
};

export default App;
