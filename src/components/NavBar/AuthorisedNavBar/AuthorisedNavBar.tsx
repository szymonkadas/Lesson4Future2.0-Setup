import { Link } from "react-router-dom";
import Button from "../../Buttons/Button/Button";
import styles from "../NavBar.module.scss";

export default function AuthorisedNavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.logoBox}>
          <Link to="/">
            <img
              src="/src/assets/img/Logo-horyzontalne-kolor-SVG.svg"
              alt="Logo Neuron Foundation"
            />{" "}
          </Link>
        </div>
        <ol>
          <Link to="/start">
            <li>Start</li>
          </Link>
          <Link to="/minigames">
            <li>Minigry</li>
          </Link>
          <Link to="/dodatkowe">
            <li>Dodatkowe materiały</li>
          </Link>
          <Link to="/profile/student">
            <li>Profil</li>
          </Link>
        </ol>
      </div>
      <Button
        initialStyle={styles.logOutButton}
        textContent="Wyloguj się"
        to="/wyloguj"
      ></Button>
      {/* 
      MOBILE:
      <div className="responsive-nav">
        <button onClick="handleShowUp()">
          <div className="open"><span>Menu</span><i className="fas fa-bars" aria-hidden="true"></i></div>
          <div className="close"><span>Zamknij</span><i className="fas fa-times" aria-hidden="true"></i></div>
        </button>
      </div>
      <div className="nav-nakladka"></div>
      <div className="responsive-nav-box">
        <ul>
          
<a href="/start"><li>Start</li></a>
<a href="/mini-gry"><li>Minigry</li></a>
<a href="/dodatkowe"><li>Dodatkowe materiały</li></a>
<a href="/profile/student"><li>Profil</li></a>

          <a href="/wyloguj"><li className="logout">Wyloguj się</li></a>
        </ul>
      </div> */}
    </nav>
  );
}
