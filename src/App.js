import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "@carbon/ibmdotcom-react";
import Masthead from "./components/Masthead";
import HomePage from "./components/HomePage";
import DigitalContentPage from "./components/DigitalContentPage";
import SkillsPage from "./components/SkillsPage";
// import JobMarketPage from "./components/JobMarketPage";
import ContentViewPage from "./components/ContentViewPage";
import UseCasesPage from "./components/UseCasesPage";
import LunaPage from "./components/LunaPage";

const App = () => {
  return (
    <div style={{background: "#161616", overflow: 'hidden'}}>
      <Masthead />
      <Switch>
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
        <Route exact path="/skills" component={SkillsPage} />
        <Route exact path="/skills/blog/:id" component={ContentViewPage} />
        {/* <Route exact path="/job-market" component={JobMarketPage} />
        <Route exact path="/job-market/blog/:id" component={ContentViewPage} /> */}
        <Route exact path="/use-cases" component={UseCasesPage} />
        <Route exact path="/luna" component={LunaPage} />
        
        <Route path="/about-us" component={HomePage} />
        <Route path="/academic-initiative" component={HomePage} />
        <Route path="/" component={HomePage} />
      </Switch>

      <Footer />
  
    </div>
  );
};

export default App;
