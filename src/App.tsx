import "./App.scss";
import Header from "./components/sections/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Boxes from "./components/sections/Boxes/Boxes";
import About from "./components/sections/About/About";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Header />
			<Boxes />
			<About />
		</div>
	);
}

export default App;
