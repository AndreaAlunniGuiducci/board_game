import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">BoardGames</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li
            className={`${styles.navItem} ${
              location.pathname === "/" ? styles.active : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              location.pathname === "/lista_giochi" ? styles.active : ""
            }`}
          >
            <Link to="/lista_giochi">Giochi</Link>
          </li>
          <li
            className={`${styles.navItem} ${
              location.pathname === "/prenotati" ? styles.active : ""
            }`}
          >
            <Link to="/prenotati">Prenotazioni</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
