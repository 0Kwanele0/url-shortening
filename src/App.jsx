import { useState, useEffect } from "react";

import banner from "./assets/banner.svg";
import styles from "./app.module.scss";
import Button from "./components/Button/Button";
import LinkCard from "./components/LinkCard/LinkCard";
function App() {
  const [data, setData] = useState("");
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem("shortlinks")) || []
  );
  const [submit, setSubmit] = useState(false);

  function handleForm(e) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${data}`).then(async (res) => {
      const data = await res.json();
      console.log(data.result);
      links.push(data.result);
      localStorage.setItem("shortlinks", JSON.stringify(links));
      setSubmit(!submit);
      setData("");
    });
    e.preventDefault();
  }

  function clearStorage() {
    localStorage.clear("shortlinks");
    setSubmit(!submit);
  }

  function formChange(e) {
    setData(e.target.value);
  }

  useEffect(() => {
    setLinks(JSON.parse(localStorage.getItem("shortlinks")) || []);
  }, [submit]);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.container}>
        <img className={styles.image} src={banner} alt="url shorten banner" />
        <section className={styles.text}>
          <h1 className={styles.text__header}>
            Shorten your links <br />
            with just one click!
          </h1>
          <form
            onSubmit={handleForm}
            className={styles.text__form}
            action="submit"
          >
            <input
              value={data}
              required={true}
              placeholder="Paste your link here...."
              type="url"
              onChange={formChange}
            />
            <div className={styles.btnContainer}>
              <Button text="Shorten" />
            </div>
          </form>
        </section>
      </div>
      <section>
        {links.length > 0 && (
          <div className={styles.displayLinks}>
            <div className={styles.header}>
              <p>Your links</p>
              <p onClick={clearStorage}>Clear all</p>
            </div>
            {links.map((item, key) => {
              return <LinkCard key={key} data={item} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
