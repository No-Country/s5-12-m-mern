"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Backdrop from "../UI/backdrop/Backdrop";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { FaPaw, FaSignOutAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import styles from "./Header.module.css";
import SideDrawer from "./SideDrawer";
import AuthContext from "../../../store/auth-context";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const authCtx = useContext(AuthContext);
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
          <ul className={styles["nav-links-drawer"]}>
            {authCtx.isLoggedIn ? (
              <li>
                Mi perfil
                <FaUserAlt />
              </li>
            ) : (
              <li>
                Mi perfil
                <AiOutlineUser />
              </li>
            )}
            {authCtx.isLoggedIn ? (
              <li>
                <AiOutlineBell />
              </li>
            ) : (
              ""
            )}
            {authCtx.isLoggedIn ? (
              <li>
                Historial <BsClockHistory />
              </li>
            ) : (
              ""
            )}

            {authCtx.isLoggedIn ? "" : <li>Quiero ser paseador cuidador</li>}
            {authCtx.isLoggedIn ? (
              <li>
                Perfil mascota <FaPaw />
              </li>
            ) : (
              ""
            )}
            {!authCtx.isLoggedIn ? (
              <li>
                <Link href="/login">Iniciar sesión</Link>
                <FaSignInAlt />
              </li>
            ) : (
              <li>
                <button onClick={logoutHandler}>Cerrar sesión</button>
                <FaSignOutAlt />
              </li>
            )}
          </ul>
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
