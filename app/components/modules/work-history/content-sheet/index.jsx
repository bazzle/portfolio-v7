import styles from './style.module.scss';
import PropTypes from 'prop-types';
import ListItem from '@/app/components/components/list-item';

function ContentSheet({
		id,
		name,
		startDate,
		endDate,
		clients,
		intro,
		bodyContent
	}) {
		const ongoingYear = (startDate) => {
			const currentYear = new Date().getFullYear();
			return currentYear - startDate
		}
		let duration
		if (typeof endDate === 'string' || endDate === null){
			duration = `Ongoing ~ ${ongoingYear(startDate)} years`
		} else {
			duration = `~ ${endDate - startDate} years`
		}
		return (
			<div id={`panel-${id}`} className={styles.content_sheet} role="tabpanel">
				<div className="inner-2col">
					<div className={styles.content_sheet__main}>
						<h3 className="visually-hidden">{name}</h3>
						<p className={styles.intro}>
							{intro}
						</p>
						<div className={styles.body_text} >
							{bodyContent}
						</div>
						<div className={styles.metadata}>
							<div className={styles.metadata__item}>
								<h4 className={styles.metadata__heading}>Duration</h4>
								<p className={styles.duration}>
									{duration}
								</p>
							</div>
							<div className={styles.metadata__item}>
								<h4 className={styles.metadata__heading}>Clients</h4>
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
	endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	clients: PropTypes.array.isRequired,
	intro: PropTypes.string,
	bodyContent: PropTypes.string.isRequired,
};

export default ContentSheet;