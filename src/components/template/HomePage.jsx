import style from "components/template/HomePage.module.css"
import HeroSection from "../module/HeroSection"
import Customer from "../module/Customer"
import CustomersComments from "../module/CustomersComments"

function HomePage() {
	return (
		<>
			<HeroSection />
			<CustomersComments />
			<Customer />
		</>
	)
}

export default HomePage