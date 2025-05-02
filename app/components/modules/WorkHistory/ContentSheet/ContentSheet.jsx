import ListItem from '@/app/components/components/ListItem/ListItem';

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
				<div className="contentSheet__metadata__item">
					<h4 className="contentSheet__metadata__heading">Clients</h4>
					<ul className="contentSheet__clients_list">
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
	const classListString = `contentSheet ${ isHidden ? "contentSheet_hidden" : ""}`;

	return (
		<div id={`panel-${id}`} className={classListString} role="tabpanel">
			<div className="inner-2col">
				<div className="contentSheet__main">
			  		<h3 className="contentSheet__name visually-hidden--show-print">{name}</h3>
			  		<p className="contentSheet__dates">
						<span>{startDate} – {endDate}</span>
			  		</p>
			  		<p className="contentSheet__intro">
						{intro}
			  		</p>
			  		<div className="contentSheet__body_text">
						{bodyContent}
			  		</div>
			  		<div className="contentSheet__metadata">
						<h4 className="contentSheet__metadata__heading">Duration</h4>
						<p className="contentSheet__metadata__duration">
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