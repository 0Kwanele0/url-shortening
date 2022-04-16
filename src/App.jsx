import banner from "./assets/banner.svg";
import styles from "./app.module.scss";
import Button from "./components/Button/Button";
function App() {
  return (
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
  );
}

export default App;
