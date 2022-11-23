"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <>
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

        <nav className={styles["main-navigation__header-nav"]}>
          <NavLinks />
        </nav>
      </div>
    </>
  );
};

export default Header;
