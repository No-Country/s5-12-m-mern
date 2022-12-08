"use client";
import { useState, useContext } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import { BsThreeDots, BsClockHistory } from "react-icons/bs";
import { FaPaw, FaSignOutAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import Backdrop from "../UI/backdrop/Backdrop";
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

  return (
    <>
      {isDrawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <ul className={styles["nav-links"]}>
        {userState.token
          ? <>
            <li>
              <Link href="/contratar">
                Buscar paseadores
              </Link>
            </li>
            <li>
              <Link href="/user/profile">
                <FaUserAlt />
              </Link>
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
              {userState.token
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
  );
};

export default NavLinks;
