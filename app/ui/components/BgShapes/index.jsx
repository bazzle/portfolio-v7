'use client';

import { motion } from "motion/react";
import styles from "./BgShapes.module.scss";

const isDev = process.env.NODE_ENV === "development";

function BgShapes(props){
	const variantClass = props.variant ? styles[`shapes--${props.variant}`] : undefined;
	const className = [styles.shapes, variantClass].filter(Boolean).join(' ');
	const bgImage = 'url("/images/texture-dark.webp")';
	return(
		<div role="presentation" className={className}>
			<span className={styles["shapes__background"]} style={{ backgroundImage : bgImage }}></span>
			<div></div>
			<motion.div
				initial={ isDev ? false : { x: 0 }}
				animate={ isDev ? false : {
					x: [0, -100, 0]
				}}
				transition={ isDev ? false : {
					duration: 30,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop"
				}}
			></motion.div>
			<motion.div
				initial={ isDev ? false : { x: 0 }}
				animate={ isDev ? false : {
					y: [50, 0, 0],
				}}
				transition={ isDev ? false : {
					duration: 60,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop"
				}}
			></motion.div>
		</div>
	)
}

export default BgShapes;
