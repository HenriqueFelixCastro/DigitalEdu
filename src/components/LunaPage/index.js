import React from "react";

import HeroLuna from "./HeroLuna"
import HighlightedUniversities from "./HighlightedUniversities"
import HighlightedDepoimento from "./HighlightedDepoimento"
import DigitalContentAcademic from "./DigitalContentAcademic";
import HighligthedDepoimentoSecond from "./HighlightedDepoimentoSecond";

const LunaPage = () => (
      <>
         <HeroLuna />
         <HighlightedUniversities />
         <HighlightedDepoimento invert={"row"} urlImg={"../img/luna/Group 10662 - 2.png"} />
         <DigitalContentAcademic />
         <HighlightedDepoimento invert={"row-reverse"} urlImg={"../img/luna/Group 10737 - 2.png"}
         />
      </>
);

export default LunaPage;