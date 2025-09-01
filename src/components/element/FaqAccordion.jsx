import { FaChevronDown } from "react-icons/fa6";

import styles from "components/element/FaqAccordion.module.css";

const FaqAccordion = ({ questions, answer, isOpen, onToggle }) => {
  return (
    <div className={`${styles.accordion}  ${isOpen ? styles.open : ""}`}>
      <div className={styles.header} onClick={onToggle}>
        <h3 className={styles.questions}>{questions}</h3>
        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <FaChevronDown />
        </span>
      </div>
      <div className={`${styles.answerContainer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.answer}>{answer} </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
