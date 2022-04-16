import Button from "../Button/Button";
import styles from "./linkcard.module.scss";

function LinkCard(props) {
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.link_original}>{props.data.original_link}</p>
        <p className={styles.link_short}>{props.data.short_link}</p>
      </div>
      <Button text="Copy" />
    </div>
  );
}

export default LinkCard;
