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
			{props.queryDesktop && (
				<div className={classes.contTem + " " + classes.contTemD}>
					<div className={classes.feuilleD}>
						<svg
							preserveAspectRatio="xMidYMid meet"
							data-bbox="47 20 106.001 160"
							xmlns="http://www.w3.org/2000/svg"
							width="200"
							height="200"
							viewBox="47 20 106.001 160"
							data-type="color"
							role="presentation"
							aria-hidden="true"
						>
							<g>
								<path
									fill="#28231f"
									d="M117.798 66.711C97.32 99.094 54.615 179.268 54.512 179.683l1.061.317c.23-.579 42.593-80.318 63.151-112.716-.318-.177-.617-.382-.926-.573z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M112.645 87.602c-3.79 0-6.252-.603-6.306-.617l-.443-.112 1.404-3.66c.164-.553.475-1.379 1.008-2.622l.755.306-.441 1.147c.247-.397.544-.89.902-1.499 4.431-7.55 40.746-18.941 42.29-19.422l1.187-.37-.738 1.001c-.111.152-11.309 15.211-22.878 21.602-6.232 3.443-12.368 4.246-16.74 4.246zm-5.654-1.309c2.183.427 11.958 1.896 21.999-3.649 9.668-5.341 19.102-16.857 21.832-20.349-6.523 2.102-36.767 12.139-40.596 18.662-1.707 2.909-2.228 3.521-2.553 3.561l-.682 1.775z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M116.39 70.334l.004-1.016c.001-.383.13-9.562 8.241-24.547 8.095-14.953 17.781-23.974 17.878-24.063l.767-.708-.085 1.04c-.011.122-1.072 12.329-7.712 24.321-6.622 11.962-18.272 24.12-18.388 24.241l-.705.732zm25.865-48.238c-2.486 2.491-10.234 10.743-16.902 23.061-6.414 11.848-7.778 20.167-8.066 23.051 2.716-2.932 11.906-13.165 17.485-23.243 5.39-9.737 7.056-19.605 7.483-22.869z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M104.482 90.766l-.314-.762c-.048-.116-4.787-11.802-4.05-27.03.738-15.238 9.118-29.334 9.203-29.475l.453-.752.282.831c.081.24 2.004 6.036 2.739 20.01.737 13.996-5.905 32.949-5.971 33.139l-2.342 4.039zm5.064-56.013c-1.779 3.226-7.987 15.335-8.612 28.261-.62 12.797 2.665 23.041 3.69 25.889l1.465-2.517c.035-.12 6.623-18.922 5.895-32.756-.57-10.783-1.878-16.744-2.438-18.877z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M94.669 107.965l-.346-.169c-.356-.174-8.784-4.493-12.241-23.985-3.443-19.416 2.691-32.473 2.753-32.603l.249-.517.406.406c.124.124 3.103 3.263 8.506 22.697 5.406 19.439 2.076 31.6 2.041 31.721l-1.368 2.45zm-9.375-55.763c-1.152 2.82-5.376 14.736-2.41 31.468 2.991 16.862 9.879 22.179 11.468 23.199l.941-1.665c-.004-.03 3.259-11.993-2.08-31.191-4.214-15.156-6.958-20.318-7.919-21.811z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M95.065 108.92c-.742 0-1.126-.035-1.19-.041l-.62-.061 2.105-3.701c.252-.252 6.367-6.226 21.344-9.915 14.964-3.684 22.408-2.048 22.717-1.977l.531.123-.268.474c-.135.237-3.496 5.882-21.005 10.812-13.637 3.837-20.943 4.286-23.614 4.286zm-.469-.824c2.099.042 9.496-.203 23.862-4.247 14.213-4.001 18.928-8.478 20.152-9.939-2.091-.306-9.371-.959-21.711 2.082-14.133 3.481-20.388 9.157-20.926 9.665l-1.377 2.439z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M93.77 128.453c-6.112 0-10.478-.435-10.566-.444l-.613-.064 2.214-3.934c23.471-18.6 52.853-11.103 53.146-11.025l.662.175-.47.497c-.082.088-8.401 8.773-22.685 12.464-7.23 1.868-15.387 2.331-21.688 2.331zm-9.866-1.199c3.256.273 18.741 1.338 31.35-1.921 12.052-3.114 19.779-9.83 21.78-11.727-4.594-1.003-30.547-5.69-51.659 10.991l-1.471 2.657z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M83.416 128.136l-.347-.165c-.206-.099-5.166-2.569-14.513-15.946-9.388-13.437-3.827-37.514-3.77-37.756l.252-1.061.505.967c8.321 15.905 19.785 49.686 19.9 50.025l.057.171-2.084 3.765zm-18.07-52.568c-.958 4.86-4.159 24.486 3.879 35.99 7.846 11.229 12.613 14.699 13.866 15.485l1.524-2.753c-.875-2.565-11.337-33.104-19.269-48.722z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M70.511 151.705l-.365-.625c-.895-1.535-21.923-37.782-20.445-52.808l.073-.748.588.472c.174.14 17.476 14.179 21.148 29.514 3.677 15.353 1.457 19.678 1.361 19.855l-2.36 4.34zM50.456 99.136c-.611 14.136 17.245 46.022 20.032 50.905l1.667-3.065c.02-.039 2.139-4.342-1.437-19.278-3.218-13.439-17.172-25.93-20.262-28.562z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M69.739 151.42l2.509-4.559c.098-.085 9.965-8.463 25.436-13.371 15.441-4.899 31.924-5.833 32.089-5.841l1.179-.064-.889.776c-17.817 15.559-59.081 22.843-59.495 22.914l-.829.145zm3.096-3.988l-1.572 2.889c5.836-1.099 40.665-8.114 57.32-21.774-4.101.317-17.747 1.625-30.652 5.719-14.704 4.664-24.282 12.485-25.096 13.166z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M63.568 164.562l-.387-.412c-.05-.053-5.05-5.4-10.684-13.033-5.384-7.295-6.029-22.556-5.197-23.353l.258-.247.333.222c12.083 9.715 17.281 33.305 17.332 33.543l.032.146-1.687 3.134zm-15.735-35.815c-.281 2.765.467 15.312 5.319 21.887 4.708 6.377 8.965 11.145 10.237 12.541l1.004-1.867c-.447-1.966-5.508-23.214-16.56-32.561z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M74.865 160.449c-5.522 0-8.984-.609-9.066-.624l-.55-.102 2.636-4.802c8.917-6.819 37.42-2.372 38.627-2.178l1.306.208-1.196.562c-12.202 5.734-24.007 6.936-31.757 6.936zm-8.36-1.338c3.261.468 20.288 2.364 38.518-5.763-5.858-.807-28.945-3.548-36.576 2.166l-1.942 3.597z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M126.099 77.769c-4.648 2.412-9.52 4-14.691 4.814-.703.111-.404 1.178.295 1.068a48.652 48.652 0 0014.955-4.926c.634-.328.074-1.284-.559-.956z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M93.107 91.417a30.107 30.107 0 01-4.079-11.177c-.109-.702-1.177-.404-1.069.294a30.926 30.926 0 004.191 11.441c.37.609 1.329.053.957-.558z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M110.961 118.027l-10.999 3.505c-.677.216-.388 1.286.295 1.068l10.999-3.505c.677-.215.387-1.285-.295-1.068z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M119.752 115.553l-2.551 1.263c-.639.317-.078 1.272.559.956l2.551-1.263c.639-.316.079-1.272-.559-.956z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M65.23 127.483a24.474 24.474 0 01-3.727-6.524c-.253-.659-1.325-.373-1.069.294a26.223 26.223 0 004.013 7.013c.443.558 1.223-.231.783-.783z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M67.02 133.104l-1.681-2.555c-.39-.593-1.351-.039-.957.559l1.681 2.555c.39.593 1.351.039.957-.559z"
									data-color="1"
								></path>
								<path
									fill="#28231f"
									d="M130.793 44.111a43.484 43.484 0 01-5.041 8.506c-.431.568.531 1.121.957.559a43.484 43.484 0 005.041-8.506c.29-.645-.665-1.209-.957-.559z"
									data-color="1"
								></path>
							</g>
						</svg>
					</div>
					<div className={classes.titreD}>
						<h1>
							<span>Vos</span>{" "}
							<span>
								<span>T</span>émoignages
							</span>
						</h1>
					</div>

					<div
						className={
							classes.contTemoins + " " + classes.contTemoinsD
						}
					>
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
				</div>
			)}
		</div>
	);
};
export default VosTemoignages;
