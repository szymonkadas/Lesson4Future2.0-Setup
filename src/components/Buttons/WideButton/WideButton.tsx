import Button, { ButtonProps } from "../Button/Button";
import styles from "./WideButton.module.scss";

// it's existence is kindoff questionable due to initialStyle.
// it may be needed to adjust styling logic (classes overwriting each other, gotta work on it onfirst issue encounter)
export default function WideButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      initialStyle={`${styles.wideButton} ${props.initialStyle}`}
      onHoverClass={props.onHoverClass}
    />
  );
}
