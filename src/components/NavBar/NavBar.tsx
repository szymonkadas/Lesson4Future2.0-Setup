import React from "react";
import Button from "../Buttons/Button/Button";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoBox}>
          <a>
            <img src="src/assets/img/Logo-horyzontalne-kolor-SVG.svg" alt="" />
          </a>
        </div>
        <ol>
          <a
            href="http://lesson4future.com"
            aria-label="Lesson4Future homepage"
          >
            <li>Start</li>
          </a>
          {/* <!-- <a href=""><li>Nauczyciel</li></a> --> */}
          <a href="http://lesson4future.com/index.html#about">
            <li>O nas</li>
          </a>
          <a href="http://lesson4future.com/kontakt.html">
            <li>Kontakt</li>
          </a>
        </ol>
      </div>
      <div className={styles.buttonsBox}>
        {/* To do: linki */}
        <Button
          to="/login"
          initialStyle={styles.logInButton}
          textContent="Zaloguj się"
        ></Button>
        <Button
          to="/register"
          initialStyle={styles.signUpButton}
          textContent="Zarejestruj się"
        ></Button>
      </div>
      {/* wersja mobilna */}
      {/* <div className={styles.responsiveNav}>
            <button> */}
      {/* handleShowUp */}
      {/* <div className={styles.open}><span>Menu</span><i className="fas fa-bars"></i></div>
            <div className={styles.close}><span>Zamknij</span><i className="fas fa-times"></i></div>
            </button>
        </div>
        <div className={styles.navNakladka}></div>
        <div className={styles.responsiveNavBox}>
            <ul>
            <a href="http://lesson4future.com"><li>Start</li></a> */}
      {/* <!-- <a href=""><li>Nauczyciel</li></a> --> */}
      {/* <a href="http://lesson4future.com/index.html#about"><li>O nas</li></a>
          <a href="http://lesson4future.com/kontakt.html"><li>Kontakt</li></a>
          <a href="/login"><li className="login">Zaloguj się</li></a>
          <a href="/register"><li className="sign-up">Zarejestruj się</li></a>
            </ul>
        </div> */}
    </nav>
  );
};

export default NavBar;
