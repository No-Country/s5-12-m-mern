"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { BsThreeDots, BsClockHistory } from "react-icons/bs";
import { FaPaw, FaSignOutAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import Backdrop from "../UI/backdrop/Backdrop";
import AuthContext from "../../../store/auth-context";

const NavLinks = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <ul className={styles["nav-links"]}>
        {authCtx.isLoggedIn ? (
          <li>
            <FaUserAlt />
          </li>
        ) : (
          <li>
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
        <li>
          <button onClick={openDrawerHandler}>
            <BsThreeDots />
          </button>
        </li>
        {isDrawerOpen && (
          <div className={styles.drawerCtn}>
            <ul>
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
          </div>
        )}
      </ul>
    </>
  );
};

export default NavLinks;
