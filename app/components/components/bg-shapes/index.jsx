'use client';
import styles from './style.module.scss';
import { motion } from 'framer-motion';

function BgShapes(props){
	const variantClass = styles[`shapes_${props.variant}`];
	return(
		<div role="presentation" className={`${styles.shapes} ${variantClass}`}>
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
					y: [0, 50, 0],
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