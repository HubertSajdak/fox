import "./App.scss";
import Header from "./components/sections/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Boxes from "./components/sections/Boxes/Boxes";
import About from "./components/sections/About/About";
import Features from "./components/sections/Features/Features";
import OtherFeatures from "./components/sections/OtherFeatures/OtherFeatures";
import Prices from "./components/sections/Prices/Prices";
import Team from "./components/sections/Team/Team";
import FAQ from "./components/sections/FAQ/FAQ";
import Facts from "./components/sections/Facts/Facts";
import Contact from "./components/sections/Contact/Contact";
import Map from "./components/sections/Map/Map";
import Footer from "./components/sections/Footer/Footer";
import { NavbarProvider } from "./context/NavbarContext";
import Aos from "aos";
function App() {
	Aos.init({
		duration: 1500,
		debounceDelay: 300,
		once: true,
		delay: 50,
		offset: 200,
	});
	return (
		<NavbarProvider>
			<div className="App">
				<Navbar />
				<Header />
				<Boxes />
				<About />
				<Features />
				<OtherFeatures />
				<Prices />
				<Team />
				<FAQ />
				<Facts />
				<Contact />
				<Map />
				<Footer />
			</div>
		</NavbarProvider>
	);
}

export default App;
