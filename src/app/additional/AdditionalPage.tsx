import Card from "../../components/Card/Card";
import styles from "./AditionalPage.module.scss";

export default function StartPage() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.heading}>Dodatkowe Materiały</h1>
      <p className={styles.headingDesc}>
        Oto materiały dla Twojego rozwoju z tematów przedsiębiorczości
        całkowicie za darmo.
      </p>
      <div className={styles.containerRows}>
        <Card
          linkPath="https://learndigital.withgoogle.com/internetowerewolucje"
          imgSrc="/src/assets/img/Mental health-rafiki.svg"
          title="Google - Internetowe rewolucje"
        />
        <Card
          linkPath="https://www.lh.pl/kursy/wordpress/"
          imgSrc="/src/assets/img/Mental health-rafiki.svg"
          title="Kurs WordPress dla początkujących od Lh.pl"
        />
        <Card
          linkPath="https://pl.khanacademy.org"
          imgSrc="/src/assets/img/Mental health-rafiki.svg"
          title="Khan Academy"
        />
      </div>
    </div>
  );
}
