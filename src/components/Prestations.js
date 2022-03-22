import React from "react";
// import { useMediaQuery } from "react-responsive";
import classes from "../scss/Prestations.module.scss";
import titFleche from "../images/442b843ace074e788d2c78bffd4e3586.webp";
const Prestations = (props) => {
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div>
			{props.queryMobile && (
				<div className={classes.contPrestation}>
					<div className={classes.titre}>
						<h1>
							<span>Nos </span>Prestations
						</h1>
						<div className={classes.contImgTitle}>
							<svg
								preserveAspectRatio="xMidYMid meet"
								data-bbox="16.5 63 167 74"
								xmlns="http://www.w3.org/2000/svg"
								width="200"
								height="200"
								viewBox="16.5 63 167 74"
								data-type="color"
								role="presentation"
								aria-hidden="true"
							>
								<g>
									<path
										fill="#191919"
										d="M183.5 88.762V63H72.294v24.185H44.427v24.054H16.5V137h166.559v-25.761h-26.997V88.762H183.5zm-1.681-24.078v22.394h-52.921V64.684h52.921zm-107.845 0h52.921v22.394H73.974V64.684zM46.107 88.869H99.35v22.37H46.107v-22.37zm-27.926 46.447v-22.393h26.246v.024h26.997v22.369H18.181zm54.923 0v-22.369h53.242v22.369H73.104zm108.274-22.393v22.393h-53.243v-22.369h27.927v-.024h25.316zm-53.35-1.684h-26.889v-22.37h53.243v22.37h-26.354z"
										data-color="1"
									></path>
								</g>
							</svg>
						</div>
					</div>
					<div className={classes.contText}>
						<p>
							Aménagement paysager. Une équipe d'experts au
							service de votre terrain. Nous réalisons des projets
							d'aménagements paysagers de toutes sortes. Nous
							prenons en charge tous types de travaux extérieurs
							allant de la plus simple plantation à la réalisation
							complète d'un aménagement paysager.
						</p>
					</div>
					<div className={classes.contCTA}>
						<p>Devis gratuit </p>{" "}
						<img src={titFleche} alt="fleche-cta" />
					</div>
				</div>
			)}
		</div>
	);
};
export default Prestations;
