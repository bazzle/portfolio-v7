"use client";

import { motion } from "motion/react";


function StylisedLine(){
	return (
		<div className="stylisedLine" role="presentation">
			<motion.div
				className="stylisedLine__line"
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
			<motion.div
				className="stylisedLine__diamond"
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
			/>
		</div>
	)
}

export default StylisedLine;
