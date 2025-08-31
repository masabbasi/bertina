import styles from "components/layout/Footer.module.css";
import MobileFooter from "../module/footer/MobileFooter";
import DesktopFooter from "../module/footer/DesktopFooter";
function Footer() {
  return (
    <>
      <div className={styles.mobileFooter}>
        <MobileFooter />
      </div>
      <div className={styles.desktopFooter}>
        <DesktopFooter />
      </div>
    </>
  );
}

export default Footer;
