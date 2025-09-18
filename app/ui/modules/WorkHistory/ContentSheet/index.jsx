import ListItem from '@/app/ui/components/ListItem';
import styles from "./ContentSheet.module.scss";

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
				<>
					<h4>Clients</h4>
					<ul className={styles["contentSheet__clients_list"]}>
						{clients.map((item, index) => {
							return <ListItem key={index} blocky content={item}/>
						})}
					</ul>
				</>
			)
		} else {
			return false
		}
	}
	const classListString = [
		styles.contentSheet,
		isHidden ? styles.contentSheet_hidden : undefined
	].filter(Boolean).join(' ');

	return (
		<div id={`panel-${id}`} className={classListString} role="tabpanel">
			<div className="inner-2col">
				<div className={styles["contentSheet__main"]}>
			  		<h3 className={`${styles["contentSheet__name"]} visually-hidden--show-print`}>{name}</h3>
			  		<p className={styles["contentSheet__dates"]}>
						<span>{startDate} – {endDate}</span>
			  		</p>
			  		<p className={styles["contentSheet__intro"]}>
						{intro}
			  		</p>
			  		<div className={styles["contentSheet__body_text"]}>
						{bodyContent}
			  		</div>
			  		<div className={styles["contentSheet__metadata"]}>
						<h4>Duration</h4>
						<p className={styles["contentSheet__metadata__duration"]}>
				  			{duration}
						</p>
						{clientList()}
			  		</div>
				</div>
			</div>
		</div>
	  );
	  

}

export default ContentSheet;
