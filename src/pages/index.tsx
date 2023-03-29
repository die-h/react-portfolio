import { PersonalInfo, Contact, Wall } from "components/Home";
import styles from "styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <PersonalInfo />
      <Wall />
      <Contact />
    </div>
  );
}
