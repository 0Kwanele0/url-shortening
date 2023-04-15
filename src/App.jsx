import { useState, useEffect } from "react";

import banner from "./assets/banner.svg";
import styles from "./app.module.scss";
import LinkCard from "./components/LinkCard/LinkCard";

function App() {
    const [data, setData] = useState("");
    const [links, setLinks] = useState([]);

    const [submit, setSubmit] = useState(false);
    const [change, setChange] = useState(false);

    async function handleForm(e) {
        try {
            setSubmit(true);
            fetch(`https://api.shrtco.de/v2/shorten?url=${data}`).then(
                async (res) => {
                    const data = await res.json();
                    console.log(data.result);
                    links.push(data.result);
                    localStorage.setItem("shortlinks", JSON.stringify(links));
                    setSubmit(false);
                    setData("");
                }
            );
            e.preventDefault();
        } catch (err) {}
    }

    function clearStorage() {
        localStorage.clear("shortlinks");
        setChange(!change);
    }

    function formChange(e) {
        setData(e.target.value);
    }

    useEffect(() => {
        if (localStorage.getItem("shortlinks")) {
            setLinks(JSON.parse(localStorage.getItem("shortlinks")));
        } else {
            setLinks([]);
        }
    }, [change]);

    return (
        <div style={{ width: "100%" }}>
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={banner}
                    alt="url shorten banner"
                />
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
                            <button type="submit" className={styles.btn}>
                                {submit ? "Loading..." : "Shorten"}
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <section className={styles.links}>
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
            <div className={styles.author_cont}>
                <p className={styles.author}>
                    Made by{" "}
                    <a href="https://kwanele.netlify.app" target="blank">
                        Kwanele Gamedze
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;
