import React from "react";
import classes from "../scss/Footer.module.scss";
import facebook from "../images/facebook.webp";

const Footer = (props) => {
	return (
		<div className={classes.contFooter}>
			<div className={classes.footerVert}>
				<div className={classes.adresse}>
					<p>3495 rue de l'aronia</p>
					<p>Saint-Bruno-de-Montarville</p>
					<p>QC J3V 0A4</p>
				</div>
				<div className={classes.email}>
					<p>fernando@paysagementgf.com</p>
					<a href="tel:5146387692">514 638 7692</a>
					<a href="https://www.facebook.com/PaysagementGF/">
						<img src={facebook} alt="facebook" />
					</a>
				</div>
			</div>
			<div className={classes.footerRouge}>
				<div className={classes.titre}>
					<h1>
						paysagement gf les <br />
						portugais
					</h1>
					<a href="https://blackduckagency.com">
						© 2022 par Black Duck Agency
					</a>
				</div>
			</div>
		</div>
	);
};
export default Footer;
