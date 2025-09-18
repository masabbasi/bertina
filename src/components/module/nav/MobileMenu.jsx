import { TbMenuDeep } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

import styles from "components/module/nav/MobileMenu.module.css";
import { useState } from "react";
import MobileMenuItems from "./MobileMenuItems";

function MobileMenu() {
  const [menuStatus, setMenuStatus] = useState(false);
  const hamburgerMenuHandler = () => {
    setMenuStatus((prev) => setMenuStatus(!prev));
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburgerMenuIcon} onClick={hamburgerMenuHandler}>
        {menuStatus ? <IoMdClose /> : <TbMenuDeep />}
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
      <MobileMenuItems menuStatus={menuStatus} />
    </div>
  );
}

export default MobileMenu;
