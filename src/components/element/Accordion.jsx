import React from 'react';
import styles from 'components/element/Accordion.module.css';

const Accordion = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className={styles.accordion}>
      <div className={styles.header} onClick={onToggle}>
        <h3 className={styles.title}>{title}</h3>
        <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
          +
        </span>
      </div>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <div className={styles.contentInner}>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;