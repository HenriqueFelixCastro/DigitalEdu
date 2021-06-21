import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
} from "carbon-components-react";

const AppHeader = () => {
  return (
    <Header aria-label="IBM GUP L.A.">
      <HeaderName prefix="IBM">GUP L.A.</HeaderName>
      <HeaderNavigation aria-label="IBM GUP L.A.">
        <HeaderMenu
          aria-label="Technologies"
          menuLinkName="Technologies"
        ></HeaderMenu>
      </HeaderNavigation>
    </Header>
  );
};

export default AppHeader;
