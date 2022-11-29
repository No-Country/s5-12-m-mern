"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { BsThreeDots, BsClockHistory } from "react-icons/bs";
import { FaPaw, FaSignOutAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import Backdrop from "../UI/backdrop/Backdrop";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/userSlice.js";

const NavLinks = () => {
  const userState = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  const logoutHandler = () => {
    dispatch(logout())
  };

  const maxWidth = window?.innerWidth;
  return (
    <>
      {maxWidth <= 767 ? (
        <ul className={styles["nav-links-drawer"]}>
          {userState?.token
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
                <Link href="/login">Iniciar sesión</Link>
                <FaSignInAlt />
              </li>
            </>
            : <>
              <li>
                Mi perfil
                <AiOutlineUser />
              </li>
              <li>Quiero ser paseador cuidador</li>
              <li>
                <button onClick={logoutHandler}>Cerrar sesión</button>
                <FaSignOutAlt />
              </li>
            </>
          }
        </ul>
      ) : (
        <>
          {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
          <ul className={styles["nav-links"]}>
            {userState?.token
              ? <>
                <li>
                  <FaUserAlt />
                </li>
                <li>
                  <AiOutlineBell />
                </li>
              </>
              : <li>
                <AiOutlineUser />
              </li>
            }
            <li>
              <button onClick={openDrawerHandler}>
                <BsThreeDots />
              </button>
            </li>
            {isDrawerOpen && (
              <div className={styles.drawerCtn}>
                <ul>
                  {userState?.token
                    ? <>
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
                      <li>Quiero ser paseador cuidador</li>
                      <li>
                        <Link href="/login">Iniciar sesión</Link>
                        <FaSignInAlt />
                      </li>
                    </>
                  }
                </ul>
              </div>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default NavLinks;
