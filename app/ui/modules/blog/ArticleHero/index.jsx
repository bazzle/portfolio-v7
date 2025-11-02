import BgShapes from "@/app/ui/components/BgShapes/index.jsx";
import MetaData from "@/app/ui/components/MetaData";
import styles from './ArticleHero.module.scss';

function ArticleHero({title, date, tags}){

	return (
		<div className={styles.articleHero}>
			<div className={styles.articleHero__main}>
				<div className="container">
					<div className={styles.articleHero__lockup}>
						<h1 className={styles.articleHero__title}>{title}</h1>
						<div className={styles.articleHero__metadata}>
							{date && <MetaData tags={tags} date={date} />}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.articleHero__background}>
				<BgShapes variant="1" />
			</div>
		</div>
	)

}

export default ArticleHero
