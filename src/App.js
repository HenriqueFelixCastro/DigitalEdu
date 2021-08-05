import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "@carbon/ibmdotcom-react";
import Masthead from "./components/Masthead";
import HomePage from "./components/HomePage";
import DigitalContentPage from "./components/DigitalContentPage";

const App = () => {
  return (
    <>
      <Masthead />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/digital-content/:tech" component={DigitalContentPage} />
        <Route exact path="/luna" component={LunaPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
