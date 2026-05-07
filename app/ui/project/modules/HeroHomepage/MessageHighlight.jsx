'use client'

import { motion } from 'motion/react'
import styles from './HeroHomepage.module.scss'

export default function MessageHighlight({ children }) {
	return (
		<motion.span
			className={styles.messageHighlight}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{children}
			<motion.svg
				aria-hidden="true"
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					overflow: 'visible',
					pointerEvents: 'none',
				}}
			>
				<motion.rect
					width="100%"
					height="100%"
					fill="none"
					style={{ stroke: 'var(--highlight-border)' }}
					strokeWidth={1}
					variants={{
						hidden: { pathLength: 0 },
						visible: { pathLength: 1 },
					}}
					transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.4 }}
				/>
			</motion.svg>
		</motion.span>
	)
}
