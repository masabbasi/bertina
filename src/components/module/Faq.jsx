import styles from "components/module/Faq.module.css";
import { useState } from "react";
import { faq } from "../../constance/faq";
import FaqAccordion from "../element/FaqAccordion";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>پرسش های متداول</h2>
        <a href="#">سوالات بیشتر</a>
      </div>
      <div className={styles.body}>
        {faq.map((item,index) => (
          <FaqAccordion
            key={index}
            questions={item["questions"]}
            answer={item["answer"]}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Faq;
