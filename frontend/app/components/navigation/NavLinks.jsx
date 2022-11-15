import Link from "next/link";
import styles from "./NavLinks.module.css"
import {AiOutlineUser, AiOutlineBell} from "react-icons/ai"

const NavLinks = () => {
  return (
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
    </ul>
  );
};

export default NavLinks;
