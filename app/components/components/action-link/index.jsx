'use client'

import propTypes from "prop-types";

function ActionLink({linkString, textString, printString, clickEvent, classes}){
	const handleClick = (evt) => {
		if (clickEvent){
			evt.preventDefault();
			clickEvent();
		} else {
			return false;
		}
	}
	let classListString
	if (classes !== undefined){
		classListString = `${styles.action_link} ${classes}`
	} else {
		classListString = `${styles.action_link}`
	}
	
	return (
		<div className={classListString} data-label={printString}>
			<svg className="dot" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
			<a onClick={handleClick} href={linkString}>{textString}</a>
		</div>
	)
}

ActionLink.propTypes = {
	linkString : propTypes.string,
	textString : propTypes.string,
	printString : propTypes.string,
	clickEvent : propTypes.func,
	classes : propTypes.string
}

export default ActionLink;