import { FiPhoneCall } from "react-icons/fi";

import styles from "components/module/nav/DesktopMenu.module.css";

function DesktopMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.navRight}>
        <div className={styles.logo}>
          <img src="/images/header/logo.png" alt="bertina logo" />
        </div>
        <div>هاست</div>
      </div>
      <div className={styles.navLeft}>
        <div className={styles.call}>
          <a href="tel:+9821-49135">
            <span> 021-49135</span>
            <FiPhoneCall />
          </a>
        </div>
        <div className={styles.login}>
          <a href="#">ورود</a>
          <a href="#">ثبت نام</a>
        </div>
      </div>
    </div>
  );
}

export default DesktopMenu;
