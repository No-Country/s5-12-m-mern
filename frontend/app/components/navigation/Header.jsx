"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Backdrop from "../UI/backdrop/Backdrop";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.css";
import SideDrawer from "./SideDrawer";

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

        <Link href="/" className={styles.ctnInfoNav}>
          <Image
            src="/logowc.png"
            alt="logo Walk and Care"
            width="40"
            height="40"
          />

          <h2>Walk&Care</h2>
        </Link>
        <button
          onClick={openDrawerHandler}
          className={styles["main-navigation__menu-btn"]}
        >
          <GiHamburgerMenu size={25} />
        </button>
        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </div>
    </>
  );
};

export default Header;
