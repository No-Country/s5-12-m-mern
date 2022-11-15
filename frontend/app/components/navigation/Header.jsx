"use client";

import React, { useState } from "react";
import Backdrop from "../UI/backdrop/Backdrop";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={isDrawerOpen} onClick={closeDrawerHandler}>
        <nav className={styles["main-navigation__drawer-nav"]}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <div className={styles["header-ctn"]}>
        <button onClick={openDrawerHandler} className={styles["main-navigation__menu-btn"]}>
          <GiHamburgerMenu />
        </button>
        <h2>Walk&Care</h2>
        <nav className={styles["main-navigation__header-nav"]}>
            <NavLinks />
        </nav>
      </div>
    </>
  );
};

export default Header;
