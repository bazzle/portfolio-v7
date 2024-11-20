'use client'
import styles from './style.module.scss';
import LoopActions from './loop-actions.jsx';
import { motion } from 'motion/react';

function VennDiagram() {

    return (
        <div className={styles.venn_diagram}>
			<motion.div
				className={styles.text_overlay}
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				viewport={{ once: true }}
				transition={{
					duration: .1,
					delay: 1.2
				}}
			>
				<span>Space where I can</span>
				<LoopActions />
			</motion.div>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="255"
                viewBox="0 0 300 255"
                fill="none"
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				viewport={{ once: true }}
				transition={{
					duration: .1,
					delay: 1.2
				}}
            >
                <g clipPath="url(#clip0_0_1)">
					<g className={styles.svg__dev}>
						<circle
						cx="186.282" cy="140.384" r="112.718" className="stroke-accent" strokeWidth="2" />
						<text className="fill-accent" xmlSpace="preserve">
							<tspan x="155.957" y="10.6979">Development</tspan>
						</text>
					</g>
					<g className={styles.svg__design}>
						<circle cx="113.718" cy="140.384" r="112.718" className="stroke-accent-alt" strokeWidth="2" />
						<text className="fill-accent-alt" xmlSpace="preserve">
							<tspan x="86.6426" y="10.6979">Design</tspan>
						</text>
					</g>
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="1200" height="3003.34" fill="white" transform="translate(-100 -1564)" />
                    </clipPath>
                </defs>
            </motion.svg>
        </div>
    );
}

export default VennDiagram;