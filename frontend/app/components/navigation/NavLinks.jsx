import Link from "next/link";
import styles from "./NavLinks.module.css"
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai"
import {routesNavbar} from './routesTemp'

const NavLinks = () => {
  return (
    <ul className={styles["nav-links"]}>
      {
        routesNavbar.map(({url, title, tipo}) => {
          if (tipo === 'main') {
            return (
            <li key={title}>
              <Link href={url}>
                {title}
              </Link>
            </li>
            )
          }
          if (tipo === 'icon') {
            return (
              <li key={title}>
                <Link href="#">
                  {url}
                </Link>
              </li>
            )
          }
        })
      }
    </ul>
    );
  };

  {/* STATIC ROUTES
    <ul className={styles["nav-links"]}>
      <li>
        <Link href="/fdfdfd">
          Home
        </Link>
      </li>

      <li>
        <Link href="/fdfdfdf">
          Mascotas
        </Link>
      </li>

      <li>
        <Link href="/fdfdfd">
          Nosotros
        </Link>
      </li>

      <li>
        <Link href="/fdfdfd">
          <AiOutlineUser />
        </Link>
      </li>
      <li>
        <AiOutlineBell />
      </li>
*/}

export default NavLinks;
