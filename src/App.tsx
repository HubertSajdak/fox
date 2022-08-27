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

function App() {
	return (
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
		</div>
	);
}

export default App;
