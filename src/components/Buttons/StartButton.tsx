import React from "react";
import { Link } from "react-router-dom";
import styles from "./StartButton.module.scss";

interface StartButtonProps {
  iconClass: string;
  text: string;
  linkPath: string;
}

const StartButton: React.FC<StartButtonProps> = ({
  iconClass,
  text,
  linkPath,
}) => {
  const isExternalLink = linkPath.startsWith("http");

  if (isExternalLink) {
    return (
      <a
        href={linkPath}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.box}
      >
        <i className={iconClass} />
        <h2>{text}</h2>
      </a>
    );
  } else {
    return (
      <Link to={linkPath} className={styles.box}>
        <i className={iconClass} />
        <h2>{text}</h2>
      </Link>
    );
  }
};

export default StartButton;
