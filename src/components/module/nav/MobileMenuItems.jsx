import { useState } from "react"; // وارد کردن useState
import styles from "components/module/nav/MobileMenuItems.module.css";
import { TbLogin2 } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { PiXLogoThin } from "react-icons/pi";
import { mainCategory } from "../../../constance/mainCategory";
import MobileMenuAccordion from "../../element/MobileMenuAccordion";

function MobileMenuItems({ menuStatus }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.container} ${menuStatus ? styles.open : ""}`}>
      <div className={styles.loginAndRegister}>
        <div className={styles.login}>
          <TbLogin2 />
          ورود
        </div>
        <div className={styles.register}>
          <CiEdit />
          ثبت نام
        </div>
      </div>
      <hr className={styles.break} />
      <div className={styles.categoriesLink}>
        {mainCategory.map((item, index) => (
          <div key={index}>
            {item.children ? (
              <MobileMenuAccordion
                title={item.title}
                items={
                  item.title === "دامنه" ? item.children.link : item.children
                }
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ) : (
              <div className={styles.header}>
                <a href="#">{item.title}</a>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.call}>
        <span>ارتباط با مشاورین ما: </span>
        <span className={styles.orange}>49135</span>
        <span className={styles.gray}>- 021</span>
      </div>
      <div className={styles.social}>
        <a href="#">
          <BiLogoTelegram />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
        <a href="#">
          <PiXLogoThin />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <IoLogoInstagram />
        </a>
      </div>
    </div>
  );
}

export default MobileMenuItems;
