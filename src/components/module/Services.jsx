import { GoArrowLeft } from "react-icons/go";
import styles from "components/module/Services.module.css";

function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="images/services.webp" alt="" />
      </div>
      <div className={styles.detail}>
        <h2>تمامی خدمات برتینا به صورت یکپارچه</h2>
        <p>
          با برتینا، تمام نیازهای کسب‌وکار شما به صورت منسجم و یکپارچه فراهم
          است. از ثبت دامنه تا تبلیغات در گوگل، همه چیز را از ما بخواهید.
        </p>
        <ul>
          <li>
            <span>✓</span>
            <span>ثبت دامنه:</span>دامنه خود را به سادگی در برتینا ثبت کنید.
          </li>
          <li>
            <span>✓</span>
            <span>هاست و سرور:</span>هاست یا سرور مورد نظر خود را با بهترین
            کیفیت انتخاب کنید.
          </li>
          <li>
            <span>✓</span>
            <span>گواهی SSL:</span> امنیت وب‌سایت خود را با گواهی SSL از برتینا
            تضمین کنید.
          </li>
          <li>
            <span>✓</span>
            <span>ایمیل سازمانی:</span> نیازهای ایمیل سازمانی خود را به برتینا
            بسپارید.
          </li>
          <li>
            <span>✓</span>
            <span>پشتیبانی 24/7:</span>کارشناسان ما 24 ساعته در دسترس هستند.
          </li>
          <li>
            <span>✓</span>
            <span>تبلیغات گوگل:</span>از خدمات تبلیغات گوگل توسط برتینا بهره‌مند
            شوید.
          </li>
        </ul>
        <a href="#">
          مشاهده خدمات <GoArrowLeft />
        </a>
      </div>
    </div>
  );
}

export default Services;
