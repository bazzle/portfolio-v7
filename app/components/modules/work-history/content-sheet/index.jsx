import styles from './style.module.scss';
import PropTypes from 'prop-types';

function ContentSheet({
		name,
		duration,
		clients,
		intro,
		bodyContent
	}) {
	return (
		<div className={styles.content_sheet}>
			<div className={styles.inner}>
				<div className={styles.col_1}>
					<h3 className={styles.name}>{name}</h3>
					<p className={styles.duration}>{duration}</p>
				</div>
				<div className={styles.col_2}>
					<p className={styles.intro}>
						{intro}
					</p>
					<div className={styles.body_text} dangerouslySetInnerHTML={{ __html: bodyContent }} />
				</div>
			</div>
		</div>
	)
}

ContentSheet.propTypes = {
	name: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	clients: PropTypes.array.isRequired,
	intro: PropTypes.string,
	bodyContent: PropTypes.string.isRequired,
};

export default ContentSheet;