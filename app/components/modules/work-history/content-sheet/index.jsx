import styles from './style.module.scss';
import PropTypes from 'prop-types';
import ListItem from '../../../components/list-item';

function ContentSheet({
		id,
		name,
		startDate,
		endDate,
		clients,
		intro,
		bodyContent
	}) {
		const duration = endDate ? `${startDate - endDate} years` : 'Ongoing';
		return (
			<div id={`panel-${id}`} className={styles.content_sheet} role="tabpanel">
				<div className="inner-2col">
					<div className={styles.content_sheet__main}>
						<p className={styles.intro}>
							{intro}
						</p>
						<div
							className={styles.body_text} dangerouslySetInnerHTML={{ __html: bodyContent }}
						/>
						<div className={styles.metadata}>
							<div className={styles.metadata__item}>
								<h3 className={styles.metadata__heading}>Duration</h3>
								<p className={styles.duration}>{duration}</p>
							</div>
							<div className={styles.metadata__item}>
								<h3 className={styles.metadata__heading}>Clients</h3>
								<ul className={styles.clients_list}>
									{clients.map((item, index) => {
										return <ListItem key={index} blocky content={item}/>
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

ContentSheet.propTypes = {
	name: PropTypes.string.isRequired,
	startDate: PropTypes.number.isRequired,
	endDate: PropTypes.number,
	clients: PropTypes.array.isRequired,
	intro: PropTypes.string,
	bodyContent: PropTypes.string.isRequired,
};

export default ContentSheet;