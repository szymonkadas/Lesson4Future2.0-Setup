import { Link } from "react-router-dom";
import styles from "./RegisterForm.module.scss";

// TODO register handling and bisect teacher from student
// TODO react mechanism for handling form (validation, formstate etc.)
export default function RegisterForm() {
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
        <h1>Rejestracja</h1>
        <label className={styles.label}>
          Imię:
          <input
            className={styles.input}
            type="text"
            name="name"
            max-length="20"
            required
          />
        </label>
        <label className={styles.label}>
          Nazwisko:
          <input
            className={styles.input}
            type="text"
            max-length="40"
            name="surname"
            required
          />
        </label>
        {/* TODO: not existent in teacher's register form */}
        <label className={styles.label}>
          Data urodzenia:
          <input className={styles.input} type="date" name="date" required />
        </label>
        <label className={styles.label}>
          Email:
          <input
            className={styles.input}
            type="email"
            max-length="100"
            name="email"
            required
          />
        </label>
        <label className={styles.label}>
          Hasło:
          <input
            id="password"
            className={styles.input}
            type="password"
            name="password"
            required
          />
        </label>
        <label className={styles.label}>
          Powtórz hasło:
          <input
            id="confirm_password"
            className={styles.input}
            type="password"
            name="password"
            required
          />
        </label>
        <button
          className="g-recaptcha"
          data-sitekey="6LcvCxYpAAAAAOZ2HWAYn1okFU8zpoyc14jp6p3z"
          data-callback="onSubmit"
          data-action="submit"
        >
          Submit (what should we do with this captcha button?)
        </button>
        <div className={styles.ppBox}>
          <input type="checkbox" id="pp-checkbox" required />
          <p>
            Zapoznałem/-am się się z{" "}
            <a href="https://lesson4future.com/dokumenty/regulamin.pdf">
              regulaminem
            </a>{" "}
            oraz z{" "}
            <a href="https://lesson4future.com/dokumenty/polityka-prywatnosci.pdf">
              polityką prywatności
            </a>{" "}
            i akceptuję ich warunki*
          </p>
        </div>
        {/* VALUE WHO IS REGISTERING IS HERE! */}
        <input type="hidden" name="account_type" value="student" />
        <input type="hidden" name="{{ field_name }}" value="{{ token }}" />
        <div className="actions">
          <input
            className={styles.loginButton}
            type="submit"
            value="Zarejestruj się"
          />
        </div>
      </form>
      <span className="comment2">
        Masz juz konto?{" "}
        <Link to="/login">
          <b>Zaloguj się</b>
        </Link>
      </span>
    </div>
  );
}
