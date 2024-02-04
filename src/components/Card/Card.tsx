import React from "react";
import Button from "../Buttons/Button/Button";
import styles from "./Card.module.scss";
import TaskStatus, { TaskStatusEnum } from "./TaskStatus/TaskStatus";

interface CardProps {
  imgSrc: string;
  title: string;
  linkPath?: string;
  status?: keyof typeof TaskStatusEnum;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, linkPath, status }) => {
  return (
    <div className={`${styles.card} ${status ? styles.cardWithStatus : ""}`}>
      {status && <TaskStatus status={status}></TaskStatus>}
      <img src={imgSrc} alt="" />
      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        {linkPath ? (
          <Button
            to={linkPath}
            textContent={"Przejdź"}
            onHoverClass={styles.button}
          />
        ) : (
          "Dostępne wkrótce"
        )}
      </div>
    </div>
  );
};

export default Card;
