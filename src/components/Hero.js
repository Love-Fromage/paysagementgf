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
				<div>
					<div>test drive</div>
					<div>test drive</div>
					<div>test drive</div>
				</div>
			)}
		</div>
	);
};

export default Hero;
