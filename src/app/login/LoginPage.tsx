import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import styles from "./LoginPage.module.scss";

// auth to be implemented
const auth = false;

export default function LoginPage() {
  if (auth) {
    // redirect("/");
  } else {
    return (
      <div className={styles.pageWrapper}>
        <h1 className={styles.heading}>Zaloguj się</h1>
        <div className={styles.tileContainer}>
          <Card
            linkPath="./form"
            imgSrc="/src/assets/img/student.svg"
            title="Nie jestem nauczycielem"
          />
          <Card
            linkPath="./form"
            imgSrc="/src/assets/img/teacher.svg"
            title="Jestem nauczycielem"
          />
        </div>
        <p className={styles.subtitle}>
          Nie masz jeszcze konta? <Link to="/register">Zarejestruj się</Link>
        </p>
      </div>
    );
  }
}
