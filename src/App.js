import React from "react";
import { Masthead, Footer } from "@carbon/ibmdotcom-react";

import AppHeader from "./components/AppHeader";

const App = () => {
  return (
    <>
      <Masthead />
      <AppHeader />
      <Footer />
    </>
  );
};

export default App;
