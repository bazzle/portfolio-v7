"use client";

import propTypes from "prop-types";
import { motion } from "motion/react";

function VerticalDots({numDots, manualDelay}){
    let dotsArray = [];
    for (let index = 0; index < numDots; index++){
		let delay = manualDelay ? manualDelay + (index - index/1.1) : index - index/1.1;
        dotsArray.push(
			<motion.svg
			className="verticalDots__dot"
			initial={{ opacity: 0, scale: 0.1 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: .2,
				delay: delay,
				type: "spring",
				stiffness: 300,
				damping: 10
			}}
			key={index}
			viewBox="0 0 25 25"
			xmlns="http://www.w3.org/2000/svg">
				<path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" />
			</motion.svg>
        );
    }
    return (
        <div className="verticalDots">
            {dotsArray}
        </div>
    )
}

VerticalDots.propTypes = {
    numDots: propTypes.number
}

export default VerticalDots;