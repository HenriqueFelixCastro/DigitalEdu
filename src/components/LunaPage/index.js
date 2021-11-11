import React from "react";

import HeroLuna from "./HeroLuna"
import HighlightedUniversities from "./HighlightedUniversities"
import HighlightedDepoimento from "./HighlightedDepoimento"
import DigitalContentAcademic from "./DigitalContentAcademic";
import HighligthedDepoimentoSecond from "./HighlightedDepoimentoSecond";

const LunaPage = () => {
   return(
      <>
         <HeroLuna />
         <HighlightedUniversities />
         <HighlightedDepoimento />
         <DigitalContentAcademic />
         <HighligthedDepoimentoSecond />
      </>
   )
}

export default LunaPage;