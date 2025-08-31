import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import styles from "components/element/Social.module.css";

function Social() {
  return (
    <div className={styles.container}>
      <a href="#">
        <BiLogoTelegram />
      </a>
      <a href="#">
        <FaLinkedinIn />
      </a>
      <a href="#">
        <IoLogoInstagram />
      </a>
      <a href="#">
        <FaFacebookF />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
    </div>
  );
}

export default Social;
