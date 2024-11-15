import styles from './style.module.scss';
import ListItem from '@/app/components/components/list-item';

function ContentSheet({ contentSheetObj, isHidden }) {

	const id = contentSheetObj.id
	const name = contentSheetObj.name
	const startDate = contentSheetObj.startDate
	const endDate = contentSheetObj.endDate
	const clients = contentSheetObj.clients
	const intro = contentSheetObj.intro
	const bodyContent = contentSheetObj.content()

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

	const clientList = () => {
		if (clients){
			return (
				<div className={styles.metadata__item}>
					<h4 className={styles.metadata__heading}>Clients</h4>
					<ul className={styles.clients_list}>
						{clients.map((item, index) => {
							return <ListItem key={index} blocky content={item}/>
						})}
					</ul>
				</div>
			)
		} else {
			return false
		}
	}
	const classListString = `${styles.content_sheet} ${ isHidden ? styles.content_sheet_hidden : ''}`
	return (
		<div id={`panel-${id}`} className={classListString} role="tabpanel">
			<div className="inner-2col">
				<div className={styles.content_sheet__main}>
					<h3 className={`${styles.content_sheet__name} visually-hidden--show-print`}>{name}</h3>
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
						{clientList()}
					</div>
				</div>
			</div>
		</div>
	)

}

export default ContentSheet;