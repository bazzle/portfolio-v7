'use client';
import ColourMode from '../../modules/header/colour-mode';
import styles from './style.module.scss';
import { motion } from "motion/react";
import { useContext } from 'react';
import { colourThemeContext } from '@/app/context/colour-theme';

function BgShapes(props){
	const { colourMode } = useContext(colourThemeContext);
	const variantClass = styles[`shapes_${props.variant}`];
	const bgImage = colourMode === 'light' ? 'url("./assets/images/texture-light.jpg")' : 'url("./assets/images/texture-dark.jpg")';
	return(
		<div role="presentation" className={`${styles.shapes} ${variantClass}`} style={{
			backgroundImage : bgImage }}>
			<div></div>
			<motion.div
				initial={{ x: 0 }}
				animate={{
					x: [0, -100, 0]
				}}
				transition={{
					duration: 30,
					ease: "easeInOut",
					repeat: Infinity,
					repeatType: "loop"
				}}
			></motion.div>
			<motion.div
				initial={{ x: 0 }}
				animate={{
					y: [50, 0, 0],
				}}
				transition={{
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