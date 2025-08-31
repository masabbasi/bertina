import styles from "components/module/footer/MobileFooter.module.css";
import { useState } from "react";
import { footerCategories } from "../../../constance/categories";
import Accordion from "components/element/Accordion";
import Social from "../../element/social";
import About from "../../element/About";
import Certificate from "../../element/Certificate";

function MobileFooter() {
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.call}>
        <p>ارتباط با مشاورین ما:</p>
        <div className={styles.callNumber}>
          <span>021</span>-<span>49135</span>
        </div>
      </div>
      <div className={styles.menu}>
        {footerCategories.map((category, index) => (
          <Accordion
            key={index}
            title={category["name"]}
            items={category["subcategories"]}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
      <div className={styles.img}>
        <img src="/images/footer/slogan.svg" alt="دعوت برتینا" />
      </div>
      <Social />
      <About />
      <div className={styles.certificate}>
        <span>گواهینامه ها و مجوز ها</span>
        <Certificate />
      </div>
      <div className={styles.cr}>
        <p>
          استفاده از مطالب سایت برتینا، فقط برای مقاصد غیر تجاری و با ذکر منبع
          بلامانع است. کلیه حقوق این سایت متعلق به برتینا است.
        </p>
      </div>
    </div>
  );
}

export default MobileFooter;
