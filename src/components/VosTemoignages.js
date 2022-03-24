import React from "react";
import classes from "../scss/VosTemoignages.module.scss";
import avatar from "../images/avatar.png";

const VosTemoignages = (props) => {
	return (
		<div>
			{props.queryMobile && (
				<div className={classes.contTem}>
					<div className={classes.titre}>
						<h1>
							<span>Vos</span>{" "}
							<span>
								<span>T</span>émoignages
							</span>
						</h1>
					</div>
					<div className={classes.image}>
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
					<div className={classes.contTemoins}>
						<div className={classes.comment}>
							<img src={avatar} alt="avatar" />
							<p>
								I would like to discuss my landscaping options
								for the front yard of my house. L live at 851
								Des Grands Ducs in St-Bruno <br />
								<span>Larry Reichelson - il y a un an</span>
							</p>
						</div>
						<div className={classes.comment}>
							<img src={avatar} alt="avatar" />
							<p>
								Bonjour, En qualité d'administrateur de 4
								syndicats de copropriétés dans le parcours du
								Cerf à Longueuil, je tiens à souligner la
								qualité exceptionnelle des travaux de pavés-unis
								qui furent réalisés par l'équipe de Paysagement
								GF Les Portugais sur trois immeubles. Les
								copropriétaires sont plus qu' heureux des
								travaux qui furent réalisés dans un court délai
								à un prix tout à fait convenable et, en qualité
								d'administrateur, je tiens aussi à souligner la
								disponibilité de monsieur Fernando, tant au
								téléphone que sur place et qui nous aussi
								judicieusement accompagné dans les décisions que
								nous devions prendre. Encore une fois, en mon
								nom persionnelle ainsi qu'au nom de
								copropriétaires des Bellevue I, nos sincères
								remerciements. Alain Bélisle Président <br />
								<span> Alain Bélisle - il y a 2 ans</span>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
export default VosTemoignages;
