import { LiaNewspaper } from "react-icons/lia";
import { LiaComment } from "react-icons/lia";
import { PiNewspaperLight } from "react-icons/pi";

import Nav from "../module/nav/Nav";
import styles from "components/layout/Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.topItem}>
        <div className={styles.topItemRight}>
          <div className={styles.topItemIcon}>
            <LiaNewspaper />
          </div>
          <div className={styles.topItemBullet}></div>
          <p className={styles.topItemText}>
            شماره تلفنهای جدید پشتیبانی برتینا: 49135-021 و 49169000-021
          </p>
        </div>
        <div className={styles.topItemLeft}>
          <a href="#">
            <LiaComment />
            ارسال تیکت
          </a>
          <a href="#">
            <PiNewspaperLight />
            وبلاگ
          </a>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
