import React from "react";
import styles from "./ProfilPage.module.scss";

interface ProfilProps {
  accountType: string;
  name: string;
  surname: string;
  birthDate: string; //prolly diffrent type
  email: string;
}

const ProfilPage: React.FC<ProfilProps> = ({
  accountType,
  name,
  surname,
  birthDate,
  email,
}) => {
  const handleDeleteAccount = () => {
    alert("placeholder alert usun konto");
    // Add logic to delete the account
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.profileContainer}>
        <h1>Twój profil</h1>
        <div className={styles.inputContainer}>
          <h2>Imię</h2>
          <div className={styles.input}>{name}</div>
        </div>
        <div className={styles.inputContainer}>
          <h2>Nazwisko</h2>
          <div className={styles.input}>{surname}</div>
        </div>
        {accountType === "student" && (
          <div className={styles.inputContainer}>
            <h2>Data urodzenia</h2>
            <div className={styles.input}>{birthDate}</div>
          </div>
        )}
        <div className={styles.inputContainer}>
          <h2>Email</h2>
          <div className={styles.input}>{email}</div>
        </div>
        <div className={styles.deleteButton} onClick={handleDeleteAccount}>
          Usuń konto
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
