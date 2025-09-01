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

function HomePage() {
  return (
    <>
      <HeroSection />
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
