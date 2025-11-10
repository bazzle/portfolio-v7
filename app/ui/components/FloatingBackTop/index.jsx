'use client';

import { useEffect, useState } from 'react';
import { motion } from "motion/react";
import styles from "./FloatingBackTop.module.scss";

const handleClick = () => {
	window.scrollTo({
		top: 0,
		behavior: 'auto'
	});
};

function FloatingBackTop(){
	const navClass = styles["floatingBackTop__nav"];
	return(
		<motion.div
			className={styles.floatingBackTop}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				duration: .01,
				type: "spring",
				stiffness: 200,
				damping: 30
			}}
		>
			<button aria-label='Back to top' className={styles["floatingBackTop__backTop"]} onClick={handleClick}>
					<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className="fill-bg" d="M3 0.5H30C31.3807 0.5 32.5 1.61929 32.5 3V32.5H0.5V3C0.5 1.61929 1.61929 0.5 3 0.5Z"/>
							<path className="stroke-accent" strokeWidth="1" d="M23.5 19.5002L16.5 13.5002L9.50024 19.4998"/>
					</svg>
			</button>
		</motion.div>
	)
}

export default FloatingBackTop;