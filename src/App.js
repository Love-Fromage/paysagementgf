import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "./components/Header";
import { useMediaQuery } from "react-responsive";
import Hero from "./components/Hero";
import Prestations from "./components/Prestations";
import Cartes from "./components/Cartes";
import NosRealisation from "./components/NosRealisation";
import VosTemoignages from "./components/VosTemoignages";
import LeCarousel from "./components/LeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulaire from "./components/Formulaire";
import Footer from "./components/Footer";
import LeBouton from "./components/Lebouton";

function App() {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
	const [toggleButton, setToggleButton] = useState(false);
	const { ref, inView } = useInView();

	useEffect(() => {
		console.log("inView: " + inView);
		if (inView) {
			setToggleButton(true);
		} else {
			setToggleButton(false);
		}
	});
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
			{toggleButton && <LeBouton />}
			<div ref={ref}>
				<Cartes
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>
				<NosRealisation
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>
				<LeCarousel
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>

				<VosTemoignages
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>
				<Formulaire
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>
				<Footer
					queryMobile={isTabletOrMobile}
					queryDesktop={isDesktopOrLaptop}
				/>
			</div>
		</div>
	);
}

export default App;
