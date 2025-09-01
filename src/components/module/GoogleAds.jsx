import styles from "components/module/GoogleAds.module.css";

function GoogleAds() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <h2>سرویس تبلیغات گوگل با برتینا</h2>
        <p>
          تبلیغات Google ads پربازده‌ترین نوع تبلیغات هستند که امکان دیده‌ شدن
          در همه جا و تجربه‌ای فوق‌العاده را برای شما فراهم می‌کنند. با تبلیغات
          گوگل ادز می‌توانید در کمترین زمان در صفحه اول نتایج گوگل قرار بگیرید و
          یا میزان نصب اپلیکیشن خود را چندین برابر کنید. برتینا خدمات گوگل ادز
          را در سه دسته تبلیغات سرچ گوگل، درون اپ و تبلیغات ویدئویی با مشاوره
          رایگان جهت بهینه‌سازی تبلیغات به شما ارائه می‌دهد.
        </p>
        <a href="#">تبلیغات در گوگل ادز</a>
      </div>
      <div className={styles.left}>
        <div>
          <img src="images/googleAds/04.webp" alt="" />
          <h3>تبلیغات بنری</h3>
          <span>Banner ads</span>
        </div>
        <div>
          <img src="images/googleAds/02.webp" alt="" />
          <h3>تبلیغات اپ</h3>
          <span>App ads</span>
        </div>
        <div>
          <img src="images/googleAds/01.webp" alt="" />
          <h3>تبلیغات سرچ گوگل</h3>
          <span>Search results ads</span>
        </div>
        <div>
          <img src="images/googleAds/03.webp" alt="" />
          <h3>تبلیغات ویدیویی</h3>
          <span>Video ads</span>
        </div>
      </div>
    </div>
  );
}

export default GoogleAds;
