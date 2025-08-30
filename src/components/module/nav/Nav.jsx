import styles from "components/module/nav/Nav.module.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.mobileHeader}>
        <MobileMenu />
      </div>
      <div className={styles.desktopHeader}>
        <DesktopMenu />
      </div>
    </div>
  );
}

export default Nav;
