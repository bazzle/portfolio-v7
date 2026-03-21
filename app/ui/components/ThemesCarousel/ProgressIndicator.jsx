'use client'
import styles from './ThemesCarousel.module.scss'
import clsx from 'clsx'

export default function ProgressIndicator({ totalItems, currentItemIndex }) {
	const getPercentage = (value, total) => (value / total) * 100

	// Need to create an object with a length property for the itemArray to iterate through
	const iterations = {
		length: totalItems,
	}

	const itemArray = Array.from(iterations, (_, i) => {
		const percentage = getPercentage(currentItemIndex, totalItems)
		const classes = clsx(
			styles.progressIndicator__item,
			currentItemIndex === i + 1 && styles.active,
		)
		return (
			<div className={classes} key={i}>
				<span
					className={styles.overlay}
					style={{ '--opacity': percentage / 100 }}
				></span>
			</div>
		)
	})

	return <div className={styles.progressIndicator}>{itemArray}</div>
}
