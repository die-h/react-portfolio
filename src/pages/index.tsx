import Link from "next/link";
import { PersonalInfo, WallPost, Contact } from "components/Home";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PersonalInfo />

      <WallPost />
        {/* <Link href={`twitter-home`}>Twitter Timeline</Link>
        <Link href={`pinterest-interface`}>Pinterest Interface</Link> */}
      <Contact />
    </div>
  );
}
