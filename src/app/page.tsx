import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            Kyle Devlin Murray
          </h1>
          <h2>
            Homepage
          </h2>
        </div>
      </main>
    </div>
  );
}
