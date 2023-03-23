import Link from "next/link";
import { PersonalInfo, Contact } from "components/Home";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PersonalInfo />

      <main className={styles.main}>
        <Link href={`twitter-home`}>Twitter Timeline</Link>
        <Link href={`pinterest-interface`}>Pinterest Interface</Link>
      </main>

      <Contact />
    </div>
  );
}
