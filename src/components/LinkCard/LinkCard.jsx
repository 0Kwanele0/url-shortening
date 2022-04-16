import Button from "../Button/Button";
import { useRef, useEffect } from "react";
import styles from "./linkcard.module.scss";
import { useState } from "react";

function LinkCard(props) {
  const [text, setText] = useState("Copy");
  const [color, setColor] = useState("rgb(64, 75, 235)");

  const shortLink = useRef();

  function copyLink() {
    navigator.clipboard.writeText(shortLink.current.innerText);
    setText("Copied!");
    setColor("hotpink");

    setTimeout(() => {
      setText("Copy");
      setColor("rgb(64, 75, 235)");
    }, 1000);
  }

  useEffect(() => {}, [text]);

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.link_original}>{props.data.original_link}</p>
        <p
          style={{ color: color }}
          ref={shortLink}
          className={styles.link_short}
        >
          {props.data.short_link}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <Button text={text} buttonClicked={copyLink} />
      </div>
    </div>
  );
}

export default LinkCard;
