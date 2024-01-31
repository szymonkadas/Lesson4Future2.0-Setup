import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.boxLogo}>
          <div className={styles.logoBox}>
            <div className={styles.logo}>
              {/* Link poprawić */}
              <a href="">
                <img
                  src="src/assets/img/Sygnet-biale-SVG.svg"
                  alt="Lesson4Future homepage"
                />
              </a>
              <a href="http://neuronfoundation.com">
                <img
                  src="src/assets/img/logo-neuron-white.svg"
                  alt="Neuron Foundation homepage"
                />
              </a>
            </div>
            <div className={styles.nbp}>
              <img
                src="src/assets/img/nbp.jpg"
                alt="Projekt realizowany z Narodowym Bankiem Polskim w ramach programu edukacji ekonomicznej"
              ></img>
            </div>
          </div>
          <div className={styles.sm}>
            <a
              href="https://www.facebook.com/neuronfoundationsop/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className={`fa-brands fa-facebook-f ${styles.icon}`}></i>
            </a>
            <a
              href="https://www.instagram.com/sopneuronfoundation/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className={`fa-brands fa-instagram ${styles.icon}`}></i>
            </a>
            {/* <a href="" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                    <a href=""target="_blank"><i className="fa-brands fa-tiktok"></i></a> */}
            <a
              href="https://www.linkedin.com/company/neuron-foundation2021/"
              target="_blank"
              aria-label="LindkedIn"
            >
              <i className={`fa-brands fa-linkedin ${styles.icon}`}></i>
            </a>
          </div>
        </div>
        <div className={styles.boxMenu}>
          <ul>
            {/* Poprawić linki do podstron */}
            <a href="http://lesson4future.com">
              <li>Start</li>
            </a>
            {/* <a href=""><li>Nauczyciel</li></a> */}
            <a href="http://lesson4future.com/index.html#about">
              <li>O nas</li>
            </a>
            <a href="http://lesson4future.com/kontakt.html">
              <li>Kontakt</li>
            </a>
            <a href="http://lesson4future.com/dokumenty/polityka-prywatnosci.pdf">
              <li>Polityka prywatności</li>
            </a>
            <a href="https://lesson4future.com/dokumenty/regulamin.pdf">
              <li>Regulamin</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={styles.foot}>
        <span>&copy; 2023 Smart Oak Projects</span>
        <span>
          Strona hostowana na serwerach <a href="https://www.lh.pl">Lh.pl</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
