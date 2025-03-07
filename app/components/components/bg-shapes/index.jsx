'use client';
import styles from './style.module.scss';
import { motion } from "motion/react";
import { useContext } from 'react';
import { colourThemeContext } from '@/app/context/colour-theme';
const isDev = process.env.NODE_ENV === "development";

function BgShapes(props){
	const { colourMode } = useContext(colourThemeContext);
	const variantClass = styles[`shapes_${props.variant}`];
	const bgImage = colourMode === 'light' ? 'url("./images/texture-light.webp")' : 'url("./images/texture-dark.webp")';
	return(
		<div role="presentation" className={`${styles.shapes} ${variantClass}`}>
			<span className={styles.shapes__background} style={{ backgroundImage : bgImage }}></span>
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