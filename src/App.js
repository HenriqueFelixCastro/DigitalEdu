import React from "react";
import { Route, Switch } from "react-router-dom";

import { Footer } from "@carbon/ibmdotcom-react";

import Masthead from "./components/Masthead";
import HomePage from "./components/HomePage";
import TechnologiesPage from "./components/TechnologiesPage";
import LunaPage from "./components/LunaPage";

const App = () => {
  return (
    <>
      <Masthead />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/technologies/:tech" component={TechnologiesPage} />
        <Route exact path="/luna" component={LunaPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
