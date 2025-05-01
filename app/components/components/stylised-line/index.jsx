"use client";

import { motion } from "motion/react";


function StylisedLine(){
	return (
		<div className={styles.stylised_line} role="presentation">
			<motion.div
				className={styles.line}
				initial={{ width: "30%", opacity: 0 }}
				whileInView={{width: "100%", opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: .01,
					delay: .3,
					type: "spring",
					stiffness: 200,
					damping: 30
				}}
			>
			</motion.div>
			<motion.svg
				initial={{ opacity: 0, scale: 0.1 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: .02,
					delay: .6,
					type: "spring",
					stiffness: 200,
					damping: 30
				}}
				viewBox="0 0 25 25"
				xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" />
			</motion.svg>
		</div>
	)
}

export default StylisedLine;
