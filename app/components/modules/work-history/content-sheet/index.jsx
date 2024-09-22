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
				<div className={styles.metadata}>
					<div className={styles.metadata__item}>
						<h2 className="visually-hidden">{name}</h2>
					</div>
					<div className={styles.metadata__item}>
						<h3 className={styles.metadata__title}>Duration</h3>
						<p className={styles.duration}>{duration}</p>
					</div>
					<div className={styles.metadata__item}>
						<h3 className={styles.metadata__title}>Clients</h3>
						<ul className={styles.clients_list}>
						{clients.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
						</ul>
					</div>
				</div>
				<div className={styles.about}>
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