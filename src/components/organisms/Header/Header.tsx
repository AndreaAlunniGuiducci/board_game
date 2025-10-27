import React, { useEffect, useState } from "react";
import { List, PersonCircle, X, XCircle } from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import { changeName, loginUser, registerUser } from "../../../services/auth";
import { routes } from "../../../utils/routes";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import Modal from "../../atoms/Modal/Modal";
import styles from "./Header.module.scss";
import { Dropdown, Spinner, Tab, Tabs } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [userName, setUserName] = useState<string>("");

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [registerErrorMessage, setRegisterErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [newUserName, setNewUserName] = useState<string>("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  const registerNewUser = () => {
    if (password === confirmPassword) {
      setLoading(true);
      registerUser(email, password).then((success) => {
        setLoading(false);
        if (success) {
          const localUser = localStorage.getItem("user");
          const userObj = localUser ? JSON.parse(localUser) : null;
          console.log("🚀 ~ registerNewUser ~ userObj:", userObj)
          setLoginModalIsOpen(false);
          alert("Registrazione avvenuta con successo!");
        }
      });
    } else {
      setRegisterErrorMessage("Le password non coincidono");
    }
  };
  const login = () => {
    setLoading(true);
    loginUser(email, password).then((user) => {
      const {displayName, uid} = user as {displayName: string; uid: string};
      if (!displayName && !uid) {
        setLoading(false);
        alert("Errore nel login, riprova");
        return;
      }
      dispatch(setUser({displayName, uid}));
      setLoading(false);
      setLoginModalIsOpen(false);
    });
  };

  useEffect(() => {
    const userString = localStorage.getItem("user");
    const userObj = userString ? JSON.parse(userString) : null;
    if (userObj) {
      setUserName(userObj.displayName);
    }
    setUserIsLogged(!!userString);
  }, [loading, loginModalIsOpen]);

  return (
    <>
      {loginModalIsOpen && (
        <Modal className={styles.loginModal}>
          <div className={styles.loginModalContent}>
            <div className={styles.loginModalHeader}>
              <Button
                className={styles.closeButton}
                theme="transparent"
                onClick={() => setLoginModalIsOpen(false)}
              >
                <X />
              </Button>
            </div>
            <Tabs>
              <Tab title="Registrati" eventKey="register">
                <div className={styles.modalContent}>
                  <form
                    onSubmit={() => {
                      registerNewUser();
                    }}
                  >
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      label="Password"
                      placeholder="Password"
                      value={password}
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <Input
                      type="password"
                      label="Ripeti Password"
                      placeholder="Ripeti Password"
                      value={confirmPassword}
                      formText={registerErrorMessage}
                      onChange={(e: any) => setConfirmPassword(e.target.value)}
                    />
                    <Button type="submit" className={styles.submitButton}>
                      Invia
                    </Button>
                  </form>
                </div>
              </Tab>
              <Tab title="Login" eventKey="login">
                <div className={styles.modalContent}>
                  <form
                    onSubmit={() => {
                      login();
                    }}
                  >
                    <Input
                      type="email"
                      label="Email"
                      placeholder="Email"
                      value={email}
                      onChange={(e: any) => setEmail(e.target.value)}
                    />
                    <Input
                      type="password"
                      label="Password"
                      placeholder="Password"
                      value={password}
                      onChange={(e: any) => setPassword(e.target.value)}
                    />
                    <Button type="submit" className={styles.submitButton}>
                      Invia
                    </Button>
                  </form>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal>
      )}
      {userMenuIsOpen && (
        <Modal className={styles.loginModal}>
          <div className={styles.loginModalContent}>
            <div className={styles.loginModalHeader}>
              <Button
                className={styles.closeButton}
                theme="transparent"
                onClick={() => setUserMenuIsOpen(false)}
              >
                <X />
              </Button>
            </div>
            <div className={styles.modalContent}>
              <form
                onSubmit={() => {
                  setLoading(true);
                  changeName(newUserName).then(() => {
                    setUserMenuIsOpen(false);
                    setLoading(false);
                  });
                }}
              >
                <Input
                  type="text"
                  label="Nome"
                  placeholder="Nome"
                  value={newUserName}
                  onChange={(e: any) => setNewUserName(e.target.value)}
                />
                <Button type="submit" className={styles.submitButton}>
                  Invia
                </Button>
              </form>
            </div>
          </div>
        </Modal>
      )}
      {loading && (
        <Modal className={styles.loadingModal}>
          <Spinner />
        </Modal>
      )}
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
                location.pathname === routes.gameList ? styles.active : ""
              }`}
            >
              <Link to={routes.gameList}>Giochi</Link>
            </li>
            <li className={`${styles.navItem} `}>
              {userIsLogged ? (
                <Dropdown className={styles.userDropdown}>
                  <Dropdown.Toggle>{userName}</Dropdown.Toggle>
                  <Dropdown.Menu className={styles.profileMenu}>
                    <Dropdown.Item className={styles.profileItem}>
                      <Button
                        theme="transparent"
                        onClick={() => {
                          setUserMenuIsOpen(true);
                        }}
                      >
                        Profilo
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item className={styles.profileItem}>
                      <Button
                        theme="transparent"
                        onClick={() => {
                          setUserIsLogged(false);
                          localStorage.removeItem("user");
                        }}
                      >
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  theme="transparent"
                  onClick={() => {
                    setLoginModalIsOpen(true);
                  }}
                  className={styles.loginButton}
                >
                  <PersonCircle />
                </Button>
              )}
            </li>
            {/* <li
            className={`${styles.navItem} ${
              location.pathname === routes.bookedGames ? styles.active : ""
            }`}
          >
            <Link to={routes.bookedGames}>Prenotazioni</Link>
          </li> */}
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
                  location.pathname === routes.home ? styles.active : ""
                }`}
              >
                <Link to={routes.home}>Home</Link>
              </li>
              <li
                onClick={closeMenu}
                className={`${styles.navItem} ${
                  location.pathname === routes.gameList ? styles.active : ""
                }`}
              >
                <Link to={routes.gameList}>Giochi</Link>
              </li>
              <li className={`${styles.navItem} `}>
                {userIsLogged ? (
                  <Dropdown className={styles.userDropdown}>
                    <Dropdown.Toggle>{userName}</Dropdown.Toggle>
                    <Dropdown.Menu className={styles.profileMenu}>
                      <Dropdown.Item className={styles.profileItem}>
                        <Button
                          theme="transparent"
                          onClick={() => {
                            setUserMenuIsOpen(true);
                            setMenuIsOpen(false);
                          }}
                        >
                          Profilo
                        </Button>
                      </Dropdown.Item>
                      <Dropdown.Item className={styles.profileItem}>
                        <Button
                          theme="transparent"
                          onClick={() => {
                            setUserIsLogged(false);
                            localStorage.removeItem("user");
                          }}
                        >
                          Logout
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Button
                    theme="transparent"
                    onClick={() => {
                      setMenuIsOpen(false);
                      setLoginModalIsOpen(true);
                    }}
                    className={styles.loginButton}
                  >
                    <PersonCircle />
                  </Button>
                )}
              </li>
              {/* <li
                onClick={closeMenu}
                className={`${styles.navItem} ${
                  location.pathname === routes.bookedGames ? styles.active : ""
                }`}
              >
                <Link to={routes.bookedGames}>Prenotazioni</Link>
              </li> */}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
