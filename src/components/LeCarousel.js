import React, { useState } from "react";
import classes from "../scss/Carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";
import photo from "../images/3a257b_421562afeab54d269cb181715468cd4f_mv2.webp";
import image1 from "../images/carou1.webp";
import image2 from "../images/carou2.webp";
import image3 from "../images/carou3.webp";
import image4 from "../images/carou4.webp";
import image5 from "../images/carou5.webp";
// import image6 from "../images/carou6.webp";

import { GrNext } from "react-icons/gr";
const LeCarousel = (props) => {
	const [marge, setMarge] = useState(0);
	const [pos, setPos] = useState(0);
	const [isActive, setIsActive] = useState(true);

	let bandStyle = {
		marginLeft: marge + "vw",
	};

	let bande = (
		<div className={classes.bande} style={bandStyle}>
			<div className={classes.contInnerBande}>
				<img src={image1} alt="" />
			</div>
			<div className={classes.contInnerBande}>
				<img src={image2} alt="" />
			</div>
			<div className={classes.contInnerBande}>
				<img src={image3} alt="" />
			</div>
			<div className={classes.contInnerBande}>
				<img src={image4} alt="" />
			</div>
			<div className={classes.contInnerBande}>
				<img src={image5} alt="" />
			</div>
		</div>
	);
	const nextSlide = () => {
		// console.log(marge);
		// console.log(pos);

		if (pos >= 4) {
			setPos(0);
			setMarge(0);
		} else {
			setPos(pos + 1);
			// console.log(pos);
			setMarge(marge - 60);
		}
	};
	const prevSlide = () => {
		// console.log(marge);
		if (pos === 0) {
			// console.log(pos);
			setPos(4);
			setMarge(-(4 * 60));
		} else {
			setPos(pos - 1);
			setMarge(marge + 60);
		}
	};

	return (
		<div className={classes.contCarouPerso}>
			<div className={classes.prevBtn} onClick={prevSlide}>
				{props.queryMobile && <GrNext size="75px" />}
				{props.queryDesktop && <GrNext size="50px" />}
			</div>
			<div className={classes.fenetre}>{bande}</div>
			<div className={classes.nextBtn} onClick={nextSlide}>
				{props.queryMobile && <GrNext size="75px" />}
				{props.queryDesktop && <GrNext size="50px" />}
			</div>
		</div>
	);
};
export default LeCarousel;
