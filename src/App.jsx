import banner from "./assets/banner.svg";
import styles from "./app.module.scss";
import Button from "./components/Button/Button";
import LinkCard from "./components/LinkCard/LinkCard";
function App() {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.image} src={banner} alt="url shorten banner" />
        <section className={styles.text}>
          <h1 className={styles.text__header}>
            Shorten your links <br />
            with just one click!
          </h1>
          <form className={styles.text__form} action="">
            <input placeholder="Paste your link here...." type="link" />
            <Button text="Shorten" />
          </form>
        </section>
      </div>
      <section className={styles.displayLinks}>
        <div className={styles.header}>
          <p>Your links</p>
          <p>Clear all</p>
        </div>
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </section>
    </div>
  );
}

export default App;
