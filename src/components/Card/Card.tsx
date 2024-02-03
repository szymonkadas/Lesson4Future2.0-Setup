import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardStatus, { CardStatusEnum } from "./CardStatus/CardStatus";

interface CardProps {
  imgSrc: string;
  title: string;
  linkPath: string;
  status?: keyof typeof CardStatusEnum;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, linkPath, status }) => {
  return (
    <div className={styles.box}>
      {status && <CardStatus status={status}></CardStatus>}
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
