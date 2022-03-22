import React from "react";
// import { useMediaQuery } from "react-responsive";
import classes from "../scss/Hero.module.scss";

const Hero = (props) => {
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width:1224px)" });
	// const isDesktopOrLaptop = useMediaQuery({ query: "(min-width:1224px)" });
	return (
		<div>
			{/* code  pour le mobile drette ici  */}
			{props.queryMobile && (
				<div className={classes.hero}>
					<div className={classes.contText}>
						<div className={classes.petitTitre}>
							<h1>Plus de 20 ans d'expérience</h1>
						</div>

						<div className={classes.cont2eTitre}>
							<h1>Paysagement</h1>
							<h1>
								<span>GF </span>
								<span>Les Portugais</span>
							</h1>
						</div>
						<div className={classes.contQuote}>
							<div className={classes.quote1}>
								<svg
									preserveAspectRatio="xMidYMid meet"
									data-bbox="20 31.794 160 136.411"
									xmlns="http://www.w3.org/2000/svg"
									width="200"
									height="200"
									viewBox="20 31.794 160 136.411"
									data-type="color"
									role="presentation"
									aria-hidden="true"
								>
									<defs>
										<style>
											#comp-ka4bjv11 svg [data-color="1"]
											fill: #112A4B
										</style>
									</defs>
									<g>
										<path
											fill="#000"
											d="M57.949 168.205c10.256 0 18.376-2.65 24.359-7.949 5.983-5.299 8.974-12.564 8.974-21.795 0-8.547-2.479-15.47-7.436-20.769-4.957-5.299-11.538-7.949-19.744-7.949-9.573 0-15.897 2.564-18.974 7.692C41.709 112.991 40 105.983 40 96.41c0-23.248 8.376-43.419 25.128-60.513.684-.684.684-1.538 0-2.564s-1.538-1.538-2.564-1.538c-.684 0-1.197.171-1.538.513-13.676 13.333-23.932 26.581-30.77 39.743S20 99.487 20 114.872c0 17.094 3.333 30.256 10 39.487 6.667 9.231 15.983 13.846 27.949 13.846zm88.718 0c10.256 0 18.376-2.65 24.359-7.949 5.983-5.299 8.974-12.564 8.974-21.795 0-8.547-2.479-15.47-7.436-20.769-4.957-5.299-11.538-7.949-19.744-7.949-9.573 0-15.897 2.564-18.974 7.692-3.419-4.444-5.128-11.453-5.128-21.026 0-23.248 8.376-43.419 25.128-60.513.684-.684.684-1.538 0-2.564s-1.538-1.538-2.564-1.538c-.684 0-1.197.171-1.538.513-13.675 13.333-23.932 26.581-30.769 39.744-6.838 13.162-10.256 27.436-10.256 42.821 0 17.094 3.333 30.256 10 39.487 6.666 9.231 15.982 13.846 27.948 13.846z"
											data-color="1"
										></path>
									</g>
								</svg>
							</div>
							<p>
								On travaille <br /> pour vous <br /> comme si
								c'était <br /> pour nous !
							</p>
							<div className={classes.quote2}>
								<svg
									preserveAspectRatio="xMidYMid meet"
									data-bbox="20 31.794 160 136.411"
									xmlns="http://www.w3.org/2000/svg"
									width="200"
									height="200"
									viewBox="20 31.794 160 136.411"
									data-type="color"
									role="presentation"
									aria-hidden="true"
								>
									<defs>
										<style>
											#comp-ka4bjv11 svg [data-color="1"]
											fill: #112A4B
										</style>
									</defs>
									<g>
										<path
											fill="#000"
											d="M57.949 168.205c10.256 0 18.376-2.65 24.359-7.949 5.983-5.299 8.974-12.564 8.974-21.795 0-8.547-2.479-15.47-7.436-20.769-4.957-5.299-11.538-7.949-19.744-7.949-9.573 0-15.897 2.564-18.974 7.692C41.709 112.991 40 105.983 40 96.41c0-23.248 8.376-43.419 25.128-60.513.684-.684.684-1.538 0-2.564s-1.538-1.538-2.564-1.538c-.684 0-1.197.171-1.538.513-13.676 13.333-23.932 26.581-30.77 39.743S20 99.487 20 114.872c0 17.094 3.333 30.256 10 39.487 6.667 9.231 15.983 13.846 27.949 13.846zm88.718 0c10.256 0 18.376-2.65 24.359-7.949 5.983-5.299 8.974-12.564 8.974-21.795 0-8.547-2.479-15.47-7.436-20.769-4.957-5.299-11.538-7.949-19.744-7.949-9.573 0-15.897 2.564-18.974 7.692-3.419-4.444-5.128-11.453-5.128-21.026 0-23.248 8.376-43.419 25.128-60.513.684-.684.684-1.538 0-2.564s-1.538-1.538-2.564-1.538c-.684 0-1.197.171-1.538.513-13.675 13.333-23.932 26.581-30.769 39.744-6.838 13.162-10.256 27.436-10.256 42.821 0 17.094 3.333 30.256 10 39.487 6.666 9.231 15.982 13.846 27.948 13.846z"
											data-color="1"
										></path>
									</g>
								</svg>
							</div>
						</div>
						<div className={classes.demandeDevis}>
							<p>Demandez un devis</p>
							{/* <div class={classes.contTicket}>
								<div class={classes.tiBoute1}></div>
								<div class={classes.tiBoute}></div>
								<div class={classes.tiBoute}></div>
								<div class={classes.tiBoute}></div>

								<div class={classes.tiBoute2}></div>
							</div> */}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
