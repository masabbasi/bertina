import styles from "components/module/HeroSection.module.css";

function HeroSection() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>برتینا</h1>
          <span className={styles.subTitle}>
            ارائه‌دهنده خدمات هاستینگ، دامنه و سرور
          </span>
          <p className={styles.description}>
            برتینا، ارائه‌دهنده انواع سرویس‌های هاستینگ، سرور مجازی و اختصاصی،
            تبلیغات در گوگل، ثبت انواع دامنه و دیگر خدمات تحت شبکه و اینترنت با
            بهترین امکانات و رضایت بالای مشتریان است. ما با کمک نیروی انسانی
            متخصص و با تجربه، پاسخگوی نیاز شما در هر مرحله هستیم.
          </p>
          <p className={styles.shortText}>شما هم دعوتید ...</p>
          <button className={styles.button}>مشاهده خدمات</button>
        </div>
        <div className={styles.headerImage}>
          <img src="images/header/hero.gif" alt="" />
        </div>
      </header>
    </>
  );
}

export default HeroSection;
