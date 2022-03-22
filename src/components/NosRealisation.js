import React from "react";
import classes from "../scss/NosRealisation.module.scss";
import titFleche from "../images/442b843ace074e788d2c78bffd4e3586.webp";

const NosRealisation = (props) => {
	return (
		<div>
			{props.queryMobile && (
				<div className={classes.contNosReas}>
					<div className={classes.titre}>
						<h1>
							Nos <span>Réalisations</span>
						</h1>
						<p>Depuis plus de 20 ans</p>
					</div>
					<p className={classes.petiteDesc}>
						Une équipe hautement qualifiée en aménagement paysager
						avec un service clé en main hors pair allant de la
						conception à la réalisation de votre vision.
					</p>
					<div className={classes.contCTA}>
						<p>Devis gratuit </p>{" "}
						<img src={titFleche} alt="fleche-cta" />
					</div>
				</div>
			)}
		</div>
	);
};

export default NosRealisation;
