import styles from "./page.module.css";
import Greeter from "./components/Greeter";
import Clock from "./components/Clock";
import UpdatedClock from "./components/UpdatedClock";
import CatFact from "./components/CatFact";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Cat Fact</div>
      <CatFact />
      <Greeter greeting='Hey' name='John' />
      <div className={styles.description}>
        <p>Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <h2>Clock Component that does not use a Hook (useState and or useEffect)</h2>
        </div>
        <div>
          <Clock continent="Africa" city="Nairobi" /> <hr />
          <Clock continent="Europe" city="London" /> <hr />
          <Clock continent="Australia" city="Sydney" /> <hr />
          <Clock continent="America" city="New_York" /> <hr />
          <Clock continent="Asia" city="Tokyo" /> <hr />
        </div>
        <br />
        <br />
        <div>
          <h2>Updated Clock Component that uses a Hook (useState and or useEffect)</h2>
        </div>
        <br />
        <div>
          <UpdatedClock continent="Africa" city="Nairobi" /> <hr />
          <UpdatedClock continent="Europe" city="London" /> <hr />
          <UpdatedClock continent="Australia" city="Sydney" /> <hr />
          <UpdatedClock continent="America" city="New_York" /> <hr />
          <UpdatedClock continent="Asia" city="Tokyo" /> <hr />
        </div>
      </div>
    </main>
  );
}
