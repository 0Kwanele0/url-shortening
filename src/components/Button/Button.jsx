import styles from "./button.module.scss";
function Button(props) {
  return <button className={styles.btn}>{props.text}</button>;
}

export default Button;
