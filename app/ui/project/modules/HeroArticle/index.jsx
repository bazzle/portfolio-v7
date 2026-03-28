import BgShapes from '@/app/ui/project/components/BgShapes/index.jsx'
import MetaData from '@/app/ui/project/components/blog/MetaData'
import styles from './HeroArticle.module.scss'

function HeroArticle({ title, date, tags }) {
	return (
		<div className={styles.heroArticle}>
			<div className={styles.heroArticle__main}>
				<div className="container">
					<div className={styles.heroArticle__lockup}>
						<h1 className={styles.heroArticle__title}>{title}</h1>
						<div className={styles.heroArticle__metadata}>
							{date && <MetaData tags={tags} date={date} />}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.heroArticle__background}>
				<BgShapes variant="1" />
			</div>
		</div>
	)
}

export default HeroArticle
