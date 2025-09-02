import styles from "components/module/Features.module.css";

function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>امنیت، پشتیبانی و سرعت فوق‌العاده</h2>
        <p>
          رضایت کاربران در برتینا اهمیت زیادی دارد و برتینا در راستای جلب مشتری
          همواره در تلاش است که ارائه خدمات را بهبود بخشد.
        </p>
      </div>
      <div className={styles.cards}>
        <div>
          <img src="images/features/datacenter.svg" alt="" />
          <h3>دیتاسنتر اختصاصی</h3>
          <p>
            برتینا مجهز به دیتاسنتر اختصاصی با قوی‌ترین سخت‌افزارها و سیستم‌های
            امنیتی است.
          </p>
        </div>
        <div>
          <img src="images/features/monitoring.svg" alt="" />
          <h3>مانیتورینگ ۲۴ ساعته</h3>
          <p>
            برتینا مجهز به مانیتورینگ ۲۴ ساعته سرویس‌های هاست، میزبانی ایمیل،
            سرویس‌های ریسلری و ... است.
          </p>
        </div>
        <div>
          <img src="images/features/uptime.svg" alt="" />
          <h3>آپتایم ۹۹.۹٪</h3>
          <p>
            با آپتایم ۹۹.۹٪ و دیتاسنتر مجهز برتینا، نگرانی بابت داون شدن سایت
            نخواهید داشت.
          </p>
        </div>
        <div>
          <img src="images/features/support24-7.svg" alt="" />
          <h3>پشتیبانی ۲۴/۷</h3>
          <p>
            پشتیبانی بخش فنی به صورت ۲۴ ساعته در ۷ روز هفته از طریق تیکت، چت و
            تماس تلفنی پاسخگوی شما است.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
