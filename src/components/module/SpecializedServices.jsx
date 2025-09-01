import styles from "components/module/SpecializedServices.module.css";

function SpecializedServices() {
  return (
    <div className={styles.container}>
      <h2>سرویس های تخصصی برتینا</h2>
      <div className={styles.servicesCards}>
        <div className={styles.servicesCard}>
          <img src="images/specializedServices/03.webp" alt="" />
          <div>
            <h3>هاست وردپرس</h3>
            <p>
              بهینه شده برای وردپرس همراه با تمام ابزارهای مورد نیاز و پشتیبانی
              تخصصی متخصصین وردپرس
            </p>
            <a href="#">مشاهده پلن ها</a>
          </div>
        </div>
        <div className={styles.servicesCard}>
          <img src="images/specializedServices/woocommerce.webp" alt="" />
          <div>
            <h3>هاست ووکامرس</h3>
            <p>
              بهینه شده برای ووکامرس و کلیه پلتفرمهای فروشگاهی. سخت افزار
              اختصاصی و پشتیبانی متخصصین ووکامرس
            </p>
            <a href="#">مشاهده پلن ها</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecializedServices;
