import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { List, X, XCircle, XLg } from "react-bootstrap-icons";

const Header: React.FC = () => {
  const location = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

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
        <div className={styles.mobileMenu} onClick={openMenu}>
          {menuIsOpen ? <XCircle /> : <List />}
        </div>
      </nav>
      {menuIsOpen && (
        <div className={styles.mobileMenuContent}>
          <ul className={styles.navList}>
            <li
              onClick={closeMenu}
              className={`${styles.navItem} ${
                location.pathname === "/" ? styles.active : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={closeMenu}
              className={`${styles.navItem} ${
                location.pathname === "/lista_giochi" ? styles.active : ""
              }`}
            >
              <Link to="/lista_giochi">Giochi</Link>
            </li>
            <li
              onClick={closeMenu}
              className={`${styles.navItem} ${
                location.pathname === "/prenotati" ? styles.active : ""
              }`}
            >
              <Link to="/prenotati">Prenotazioni</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
