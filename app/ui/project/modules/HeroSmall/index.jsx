import MetaData from '@/app/ui/project/components/blog/MetaData'
import styles from './HeroSmall.module.scss'

function HeroSmall({ title }) {
	return (
		<div className={styles.heroSmall}>
			<div className="content-container">
				<div className={styles.heroSmall__lockup}>
					<h1 className={styles.heroSmall__title}>{title}</h1>
				</div>
			</div>
		</div>
	)
}

export default HeroSmall
