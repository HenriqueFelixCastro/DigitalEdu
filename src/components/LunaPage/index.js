import React from "react";

import HeroLuna from "./HeroLuna"
import HighlightedUniversities from "./HighlightedUniversities"
import HighlightedTestimonial from "./HighlightedTestimonial"
import DigitalContentAcademic from "../DigitalContentPage/DigitalContentAcademic";
import HighligthedDepoimentoSecond from "./HighlightedDepoimentoSecond";

const LunaPage = () => (
      <>
         <HeroLuna />
         <HighlightedUniversities />
         <HighlightedTestimonial />
         {/* <HighlightedDepoimento invert={"row"} urlImg={"../img/luna/Group 10662 - 2.png"} /> */}
         <DigitalContentAcademic />
      </>
);

export default LunaPage;