import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

interface CardProps {
  imgSrc: string;
  title: string;
  linkPath: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, linkPath }) => {
  return (
    <div className={styles.box}>
      <img src={imgSrc} alt="" />
      <div className={styles.contentBox}>
        <h2>{title}</h2>
        <div className={styles.buttonBox}>
          <Link to={linkPath} className={styles.button}>
            Przejdź
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
