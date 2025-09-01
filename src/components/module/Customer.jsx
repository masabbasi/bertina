import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import "swiper/css";
import styles from "components/module/Customer.module.css";
import { customersLogos } from "../../constance/CustomersLogos";

function Customer() {


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>تعدادی از مشتریان ما در چند سال گذشته</h2>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
          allowTouchMove={false}
          className={`${styles.swiper} ${styles.first}`}
          breakpoints={{
            576: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1200: { slidesPerView: 7 },
          }}
        >
          {customersLogos.slice(0,9).map((logo, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={3000}
          allowTouchMove={false}
          className={`${styles.swiper} ${styles.middle}`}
          breakpoints={{
            576: { slidesPerView: 6 },
            768: { slidesPerView: 7 },
            1200: { slidesPerView: 8 },
          }}
        >
          {customersLogos.slice(9,19).map((logo, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={3000}
          allowTouchMove={false}
          className={`${styles.swiper} ${styles.third}`}
          breakpoints={{
            576: { slidesPerView: 5 },
            768: { slidesPerView: 6 },
            1200: { slidesPerView: 7 },
          }}
        >
          {customersLogos.slice(19,28).map((logo, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
    </div>
  );
}

export default Customer;
