import styles from "./page.module.css";
import Greeter from "./components/Greeter";
import Clock from "./components/Clock";

export default function Home() {
  return (
    <main className={styles.main}>
      <Greeter greeting='Hey' name='John' />
      <div className={styles.description}>
        <p>Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code></p>
        <div>
          <Clock continent="Africa" city="Nairobi" /> <hr />
          <Clock continent="Europe" city="London" /> <hr />
          <Clock continent="Australia" city="Sydney" /> <hr />
          <Clock continent="America" city="New_York" /> <hr />
          <Clock continent="Asia" city="Tokyo" /> <hr />
        </div>
      </div>
    </main>
  );
}
