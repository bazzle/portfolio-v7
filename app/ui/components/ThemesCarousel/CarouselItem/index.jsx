import styles from './CarouselItem.module.scss';

export default function CarouselItem({itemObj}){
	return(
		<div className={styles.carouselItem}>
			<div className={styles.carouselItem__graphic}>
				{itemObj.component}
			</div>
			<h3>
				{itemObj.nameFirstLine}
			</h3>
			<div className={styles.carouselItem__description}>
				<p>{itemObj.description}</p>
			</div>
		</div>
	)
}