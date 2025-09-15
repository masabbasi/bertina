import styles from "components/module/BertinaServices.module.css";

function BertinaServices() {
  return (
    <div className={styles.container}>
			<div className={styles.titleSvg}>
						<div className={styles.right}>
							<div></div>
							<img src="images/curve-mask-left.svg" alt="" />
						</div>
						<div className={styles.center}></div>
						<div className={styles.left}>
						<img src="images/curve-mask-left.svg" alt="" />
							<div></div>
						</div>
			</div>
      <h2>لیست خدمات برتینا</h2>
      <p>
        انواع خدمات مرتبط با راه‌اندازی کسب‌وکار اینترنتی و پیش‌نیازهای طراحی
        سایت
      </p>
      <div className={styles.servicesItems}>
        <div className={`${styles.serviceItem} ${styles.serviceItem1}`}>
          <div>
            <img src="images/bertinaServices/05.webp" alt="" />
            <div>
              <h3>هاست</h3>
              <p>هاست وردپرس، لینوکس، ویندوز، ایمیل...</p>
            </div>
          </div>
          <a href="#">خرید هاست</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem2}`}>
          <div>
            <img src="images/bertinaServices/03.webp" alt="" />
            <div>
              <h3>سرور مجازی</h3>
              <p>سرور مجازی ایران، آلمان و فرانسه</p>
            </div>
          </div>
          <a href="#">خرید سرور مجازی</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem3}`}>
          <div>
            <img src="images/bertinaServices/04.webp" alt="" />
            <div>
              <h3>سرور اختصاصی</h3>
              <p>سروراختصاصی ایران و آلمان</p>
            </div>
          </div>
          <a href="#">خرید سرور اختصاصی</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem4}`}>
          <div>
            <img src="images/bertinaServices/1.webp" alt="" />
            <div>
              <h3>دامنه</h3>
              <p>خرید دامنه ir، com، ai و...</p>
            </div>
          </div>
          <a href="#">خرید دامنه</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem5}`}>
          <div>
            <img src="images/bertinaServices/2.webp" alt="" />
            <div>
              <h3>SSL</h3>
              <p>تضمین امنیت سایت</p>
            </div>
          </div>
          <a href="#">خرید SSL</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem6}`}>
          <div>
            <img src="images/bertinaServices/6.webp" alt="" />
            <div>
              <h3>تبلیغات در گوگل</h3>
              <p>گوگل ادز، تبلیغات ویدئویی، بنری و...</p>
            </div>
          </div>
          <a href="#">تبلیغات در گوگل</a>
        </div>
        <div className={`${styles.serviceItem} ${styles.serviceItem7}`}>
          <div>
            <img src="images/bertinaServices/7.webp" alt="" />
            <div>
              <h3>ایمیل سازمانی</h3>
              <p>سرویس میزبانی ایمیل</p>
            </div>
          </div>
          <a href="#">ایمیل سازمانی</a>
        </div>
      </div>
    </div>
  );
}

export default BertinaServices;
