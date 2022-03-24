import React from "react";
import classes from "../scss/Lebouton.module.scss";
import { GrNext } from "react-icons/gr";

const LeBouton = () => {
	return (
		<div
			style={{
				position: "fixed",
				bottom: "10vh",
				right: "10vw",
				zIndex: 55,
				width: "75px",
				height: "75px",
				backgroundColor: "white",
				color: "black",
				border: "1px solid black",
				borderRadius: "50px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				transform: "rotate(-90deg)",
				// paddingBottom: "0px",
				// paddingRight: "5px",
				fontSize: "35px",
				fontWeight: "bold",
			}}
			className={classes.appear}
			onClick={() => window.scrollTo(0, 0)}
		>
			<GrNext />
		</div>
	);
};
export default LeBouton;
