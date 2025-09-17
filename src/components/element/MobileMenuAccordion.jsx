import React from "react";
import styles from "components/element/MobileMenuAccordion.module.css";
import { FaChevronDown } from "react-icons/fa6";

const MobileMenuAccordion = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={onToggle}>
        <h3 className={styles.title}>{title}</h3>
        <span className={`${styles.icon} ${isOpen ? styles.rotateIcon : ""}`}>
          <FaChevronDown />
        </span>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <div className={styles.contentInner}>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                <img src={item.icon} alt="" />
                <a href="#">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuAccordion;
