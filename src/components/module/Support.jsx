import styles from "components/module/Support.module.css";

function Support() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.topText}>
          <h2>
            پشتیبانی <span>۲۴/۷</span> برای موفقیت شما
          </h2>
          <p>
            پشتیبانی بخش فنی به‌صورت ۲۴ ساعته در ۷ روز هفته از طریق تیکت، چت و
            تماس تلفنی پاسخگوی شما است.
          </p>
          <ul>
            <li>
              <span>✓</span>
              در هر زمان، از طریق چت آنلاین{" "}
              <strong>با کارشناسان ما در ارتباط باشید</strong>.
            </li>
            <li>
              <span>✓</span>
              ما مشکلات شما را در <strong>کمتر از چند دقیقه</strong> حل
              می‌کنیم.
            </li>
            <li>
              <span>✓</span>
              از مسائل کوچک تا چالش‌های بزرگ، ما همراه شما هستیم.
            </li>
          </ul>
        </div>
        <div className={styles.topImg}>
          <img src="images/support/support-chat.webp" alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomCard}>
          <img src="images/support/01.webp" alt="" />
          <div>
            <h3>تیم متخصص و حرفه‌ای</h3>
            <span>مدیریت مسائل کوچک تا چالش‌های اساسی</span>
          </div>
        </div>
        <div className={styles.bottomCard}>
          <img src="images/support/02.webp" alt="" />
          <div>
            <h3>پاسخگویی در سریع‌ترین زمان</h3>
            <span>تیکت، چت و تماس تلفنی</span>
          </div>
        </div>
        <div className={styles.bottomCard}>
          <img src="images/support/03.webp" alt="" />
          <div>
            <h3>پاسخگویی 24 ساعته در تمام روزهای سال</h3>
            <span>در تمام روزهای هفته در کنار شما هستیم</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
