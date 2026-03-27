import styles from './CarouselItem.module.scss'

export default function CarouselItem({ itemObj }) {
	return (
		<div className={styles.carouselItem}>

			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<div className={styles.carouselItem__graphic}>{itemObj.component}</div>
					</div>
					<div className="col-2">
						<h3 className={styles.carouselItem__title}>
							<span>{itemObj.nameFirstLine}</span>
						</h3>
						<div className={styles.carouselItem__description}>
							<p>{itemObj.description}</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}
