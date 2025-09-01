import styles from "components/template/HomePage.module.css"
import HeroSection from "../module/HeroSection"
import Customer from "../module/Customer"
import CustomersComments from "../module/CustomersComments"
import Faq from "../module/Faq"

function HomePage() {
	return (
		<>
			<HeroSection />
			<Faq />
			<CustomersComments />
			<Customer />
		</>
	)
}

export default HomePage;

