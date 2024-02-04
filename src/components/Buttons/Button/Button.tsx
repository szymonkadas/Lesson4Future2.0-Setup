import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export type ButtonProps = {
  textContent: string;
  action?: () => void;
  to?: string;
  initialStyle?: string;
  onHoverClass?: string;
};
// TEXT CONTENT TO CHANGE TO CHILDREN IF BUTTONS WILL NEED SOME MORE FLEXIBILITY WITHIN THEM!
export default function Button({
  textContent,
  action,
  to,
  initialStyle,
  onHoverClass,
}: ButtonProps) {
  return (
    <button
      className={`${initialStyle ? initialStyle : styles.button} ${
        onHoverClass ? onHoverClass : ""
      }`}
      // (POSSIBLE ISSUE) it may be needed to stop Link if action will be run, gotta implement when encounter first issue.
      onClick={() => {
        if (action) action();
      }}
    >
      {to ? (
        <Link className={styles.link} to={to}>
          {textContent}
        </Link>
      ) : (
        textContent
      )}
    </button>
  );
}
