import styles from "components/module/nav/Nav.module.css";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Nav() {
  return (
    <div className={styles.container}>
      <MobileMenu />
      {/* <DesktopMenu /> */}
    </div>
  );
}

export default Nav;
