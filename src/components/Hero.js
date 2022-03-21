import React from "react";
import { useMediaQuery } from "react-responsive";
import classes from "../scss/Hero.module.scss";

const Hero = () => {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });
	const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
	return (
		<div>
			{/* code  pour le mobile drette ici  */}
			{isTabletOrMobile && (
				<div className={classes.hero}>
					<div className={classes.contText}>
						<div className={classes.petitTitre}>
							<h1>Plus de 20 ans d'expérience</h1>
						</div>
						<div className={classes.cont2eTitre}>
							<h1>Paysagement</h1>
							<h1>
								<span>GF</span>
								<span>Les Portugais</span>
							</h1>
						</div>
						<div className={classes.contQuote}>
							<div className={classes.quote1}></div>
							<p>
								On travaille pour vous comme si c'était pour
								nous !
							</p>
							<div className={classes.quote2}></div>
						</div>
						<div className={classes.demandeDevis}>
							<p>Demandez un devis</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
