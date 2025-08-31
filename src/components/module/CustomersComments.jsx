import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwaperStyles.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import styles from "components/module/CustomersComments.module.css";

function CustomersComments() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src="images/comma.webp" alt="comma" />
      </div>
      <h2 className={styles.title}>آنچه مشتریان درباره ما می‌گویند</h2>
      <div className={styles.slider}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.mySwiper}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <div className={styles.header}>
                <img src="" alt="" />
                <div className={styles.detail}>
                  <span className={styles.name}></span>
                  <span className={styles.company}></span>
                </div>
              </div>
              <p></p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>2</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CustomersComments;
