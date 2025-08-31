import { FiPhoneCall } from "react-icons/fi";
import About from "../../element/About";
import Social from "../../element/social";
import Certificate from "../../element/Certificate";
import styles from "components/module/footer/DesktopFooter.module.css";
import FooterPath from "../../path/footerPath";
import { footerCategories } from "../../../constance/categories";

function DesktopFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.mainSection}>
        <div className={styles.svg}>
          <img src="/images/footer/slogan.svg" alt="دعوت برتینا" />
          <div className={styles.right}>
            <FooterPath />
          </div>
          <div className={styles.center}></div>
          <div className={styles.left}>
            <FooterPath />
          </div>
        </div>
        <div className={styles.call}>
          <div className={styles.callRight}>
            <div className={styles.callRightImg}>
              <img src="images/footer/footer-support-image.webp" alt="" />
            </div>
            <div className={styles.callRightText}>
              <span>
                پشتیبانی <span className={styles.greenText}>۲۴/۷</span> برای
                موفقیت شما
              </span>
              <span>برتینا، میزبانی خوب حق شماست</span>
            </div>
          </div>
          <div className={styles.callLeft}>
            <a href="tel:+9821-49135">
              <div>
                <span className={styles.blackNumber}>021-</span>
                <span>49135</span>
              </div>
              <FiPhoneCall />
            </a>
            <span>ارتباط با کارشناسان برتینا</span>
          </div>
        </div>

        <div className={styles.about}>
          <About />
        </div>
        <div className={styles.menu}>
          {footerCategories.map((category, index) => (
            <div key={index}>
              <div>{category.name}</div>
              <ul>
                {category.subcategories.map((subcategory, index) => (
                  <li key={index}>
                    <a href="#">{subcategory}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          <Social />
          <Certificate />
        </div>
        <div className={styles.cr}>
          <p>
            استفاده از مطالب سایت برتینا، فقط برای مقاصد غیر تجاری و با ذکر منبع
            بلامانع است. کلیه حقوق این سایت متعلق به برتینا است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
