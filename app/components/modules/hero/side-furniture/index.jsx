'use client'
import VerticalDots from "../vertical-dots";
import styles from './style.module.scss';
import { motion } from "motion/react";
import Image from "next/image";

function SideFurniture(){
	return(
		<div className={styles.side_furniture}>
			<div className={styles.side_furniture__dots}>
				<VerticalDots numDots = {4} />
			</div>
			<div className={styles.side_furniture__tick}>
				<svg viewBox="0 0 70 55" xmlns="http://www.w3.org/2000/svg">
					<motion.rect
						x="13.1887" y="40.376" width="18.2061" height="18.2061" transform="rotate(-135 13.1887 40.376)"
					/>
					<motion.rect
						x="27.7576" y="54.9448" width="18.2061" height="18.2061" transform="rotate(-135 27.7576 54.9448)"
					/>
					<motion.rect
						x="27.7576" y="54.9448" width="18.2061" height="18.2061" transform="rotate(-135 27.7576 54.9448)"
					/>
					<motion.rect
						x="42.3264" y="40.3757" width="18.2061" height="18.2061" transform="rotate(-135 42.3264 40.3757)"
					/>
					<motion.rect
						x="56.895" y="25.8069" width="18.2061" height="18.2061" transform="rotate(-135 56.895 25.8069)"
					/>
				</svg>
			</div>
			<div className={styles.side_furniture__dots}>
				<VerticalDots numDots = {2} manualDelay={.5} />
			</div>
			<div className={styles.side_furniture__profile}>
				<svg viewBox="0 0 25 23" xmlns="http://www.w3.org/2000/svg">
					<motion.path
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: .2,
							delay: .7
						}}
						d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" fill="white"
					/>
					<mask id="profileMask" fill="white">
						<path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" fill="white" />
					</mask>
					<motion.image
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							duration: .2,
							delay: .75,
						}}
						href="./assets/images/profile.jpg"
						width="25"
						height="25"
						mask="url(#profileMask)"
					/>
				</svg>
			</div>
		</div>
	)
}

export default SideFurniture;