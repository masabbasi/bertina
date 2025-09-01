import { customersComments } from "../../constance/customersComments";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CustomersCommentsSwaperStyles.css";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import styles from "components/module/CustomersComments.module.css";
import CustomerCommentCard from "../element/CustomerCommentCard";

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
					loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className={styles.mySwiper}
        >
          {customersComments.map((CustomerComment) => (
            <SwiperSlide>
              <CustomerCommentCard {...CustomerComment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CustomersComments;
