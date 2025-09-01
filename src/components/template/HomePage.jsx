import styles from "components/template/HomePage.module.css";
import HeroSection from "../module/HeroSection";
import Customer from "../module/Customer";
import CustomersComments from "../module/CustomersComments";
import Faq from "../module/Faq";
import Services from "../module/Services";
import GoogleAds from "../module/GoogleAds";
import Migration from "../module/Migration";
import Features from "../module/Features";
import Support from "../module/Support";
import Search from "../module/Search";
import SpecializedServices from "../module/SpecializedServices";
import BertinaServices from "../module/BertinaServices";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Search />
      <SpecializedServices />
      <BertinaServices />
      <Support />
      <Features />
      <Migration />
      <GoogleAds />
      <Services />
      <Faq />
      <CustomersComments />
      <Customer />
    </>
  );
}

export default HomePage;
