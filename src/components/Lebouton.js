import React, { useState } from "react";
import classes from "../scss/Lebouton.module.scss";
import { GrNext } from "react-icons/gr";

const LeBouton = (props) => {
	return (
		<div
			style={{
				position: "fixed",
				bottom: "5vh",
				right: "10vw",
				zIndex: 55,
				width: "40px",
				height: "40px",
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
			className={props.state ? classes.appear : classes.disappear}
			onClick={() => window.scrollTo(0, 0)}
		>
			<GrNext size="20px" />
		</div>
	);
};
export default LeBouton;
