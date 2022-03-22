import "./App.css";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/Hero";
import Prestations from "./components/Prestations";
import Cartes from "./components/Cartes";

function App() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
	return (
		<div className="App">
			<Header
				queryMobile={isTabletOrMobile}
				queryDesktop={isDesktopOrLaptop}
			/>
			<Hero
				queryMobile={isTabletOrMobile}
				queryDesktop={isDesktopOrLaptop}
			/>
			<Prestations
				queryMobile={isTabletOrMobile}
				queryDesktop={isDesktopOrLaptop}
			/>
			<Cartes
				queryMobile={isTabletOrMobile}
				queryDesktop={isDesktopOrLaptop}
			/>
		</div>
	);
}

export default App;
