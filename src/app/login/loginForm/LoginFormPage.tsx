import RegisterForm from "../../../components/RegisterForm/RegisterForm";
import styles from "./LoginForm.module.scss";

export default function LoginFormPage() {
  // if login else:
  return (
    <div className={styles.pageWrapper}>
      <RegisterForm></RegisterForm>
    </div>
  );
}
