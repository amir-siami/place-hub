import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import "./MainNavigation.css";

function MainNavigation({ props }) {
  const [drawerIsOpen, setdrawerIsOpen] = useState(false);

  function handleOpenDrawer() {
    setdrawerIsOpen(true);
  }

  function handleCloseDrawer() {
    setdrawerIsOpen(false);
  }

  return (
    <>
      {drawerIsOpen && (
        <Backdrop onClick={handleCloseDrawer} drawerIsOpen={drawerIsOpen} />
      )}
      <SideDrawer show={drawerIsOpen} onClick={handleCloseDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={handleOpenDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNavigation;
