import styles from "./button.module.scss";
function Button(props) {
  return (
    <button type="submit" onClick={props.buttonClicked} className={styles.btn}>
      {props.text}
    </button>
  );
}

export default Button;
