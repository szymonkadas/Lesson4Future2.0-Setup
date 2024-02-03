import { Link } from "react-router-dom";
import StartButton from "../../components/Buttons/StartButton";
import Card from "../../components/Card/Card";
import styles from "./StartPage.module.scss";

export default function StartPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.heading}>Witaj na Lesson4Future!</h1>
      <section id="startMenu" className={styles.containerRows}>
        <StartButton
          iconClass="fa-solid fa-gamepad"
          text="Zobacz wszystkie mini gry!"
          linkPath="/mini-gry"
        />
        <StartButton
          iconClass="fa-solid fa-file-lines"
          text="Zobacz dodatkowe materiały!"
          linkPath="/dodatkowe"
        />
        <StartButton
          iconClass="fa-solid fa-newspaper"
          text="Wpadnij na naszego bloga!"
          linkPath="https://neuronfoundation.com/blog/"
        />
      </section>
      <h3>Najpopularniejsze mini gry</h3>
      <section id="mini-games-list">
        <div className={styles.containerRows}>
          <Card
            linkPath="/mini-gry/persony"
            imgSrc="/src/assets/img/persony.svg"
            title="Tworzenie person"
          />
          <Card
            linkPath="/mini-gry/komunikacja"
            imgSrc="/src/assets/img/komunikacja.svg"
            title="Komunikacja"
          />
          <Card
            linkPath="/mini-gry/kreatywnosc"
            imgSrc="/src/assets/img/kreatywnosc.svg"
            title="Kreatywność"
          />
        </div>
      </section>
      <Link to="/mini-gry" className={styles.moreButton}>
        Zobacz więcej{" "}
      </Link>
      <section id="partners" className={styles.partners}>
        <h2>Sponsor narzędzia</h2>
        <img
          src="/src/assets/img/logo-lh.png"
          alt="LH.pl"
          className={styles.logo}
        ></img>
      </section>
    </div>
  );
}
