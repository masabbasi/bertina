import { TbMenuDeep } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";

import styles from "components/module/nav/MobileMenu.module.css";

function MobileMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.hamburgerMenuIcon}>
        <TbMenuDeep />
      </div>
      <div className={styles.logo}>
        <img src="images/header/logo.png" alt="bertina logo" />
      </div>
      <div className={styles.buttons}>
        <button>
          <FiPhoneCall />
        </button>
        <button>
          <MdOutlineAccountCircle />
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
