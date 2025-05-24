import styles from "./styles.module.css";
import Upperheader from "./upperheader";
import NavigationMenu from "./naviagationMenu";
export default function header() {
  return (
    <header className={styles.header}>
      <Upperheader />

      <NavigationMenu />
    </header>
  );
}
