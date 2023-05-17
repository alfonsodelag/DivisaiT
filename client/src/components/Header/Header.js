import React from "react";
import "./Header.scss";
import MediaQuery from "react-responsive";
import { HeaderMobile } from "../HeaderMobile";
import { HeaderDesktop } from "../HeaderDesktop";

const Header = () => {
  return (
    <>
      <MediaQuery maxWidth={991}>
        <HeaderMobile />
      </MediaQuery>
      <MediaQuery minWidth={992}>
        <HeaderDesktop />
      </MediaQuery>
    </>
  );
};

export default Header;
