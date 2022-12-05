"use client";
import React, { useState } from "react";
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
import { useSelector } from "react-redux";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const userState = useSelector((state) => state.users)

  console.log(userState)

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
            {userState.token
              ? <>
                <li>
                  Mi perfil
                  <FaUserAlt />
                </li>
                <li>
                  <AiOutlineBell />
                </li>
                <li>
                  Historial <BsClockHistory />
                </li>
                <li>
                  Perfil mascota <FaPaw />
                </li>
                <li>
                  <button onClick={logoutHandler}>Cerrar sesión</button>
                  <FaSignOutAlt />
                </li>
              </>
              : <>
                <li>
                  Mi perfil
                  <AiOutlineUser />
                </li>
                <li>Quiero ser paseador cuidador</li>
                <li>
                  <Link href="/login">Iniciar sesión</Link>
                  <FaSignInAlt />
                </li>
              </>
            }
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
