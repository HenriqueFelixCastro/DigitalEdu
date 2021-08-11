import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "@carbon/ibmdotcom-react";
import Masthead from "./components/Masthead";
import HomePage from "./components/HomePage";
import DigitalContentPage from "./components/DigitalContentPage";
import JobMarketPage from "./components/JobMarketPage";
import ContentViewPage from "./components/ContentViewPage";

const App = () => {
  return (
    <>
      <Masthead />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/digital-content/:tech"
          component={DigitalContentPage}
        />
        <Route
          exact
          path="/digital-content/watch/:id"
          component={ContentViewPage}
        />
        <Route exact path="/job-market" component={JobMarketPage} />
        <Route exact path="/job-market/blog/:id" component={ContentViewPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
