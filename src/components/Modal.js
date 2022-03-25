import React from "react";
import classes from "../scss/Modal.module.scss";

const Modalle = (props) => {
	let modalStyles = {
		top: window.scrollY,
	};
	console.log(props.imgPrope);
	return (
		<div
			className={classes.modalBackground}
			style={modalStyles}
			// onClick={props.closeModalle}
		>
			<div className={classes.modalContainer}>
				<div
					onClick={props.closeModalle}
					style={{
						cursor: "pointer",
					}}
				>
					<span></span>
					<span></span>
				</div>
				<img src={props.imgPrope} alt="noppe" />
			</div>
		</div>
	);
};
export default Modalle;
