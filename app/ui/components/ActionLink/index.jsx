'use client'

import propTypes from "prop-types";
import styles from "./ActionLink.module.scss";

function ActionLink({linkString, textString, printString, clickEvent, classes}){
	const handleClick = (evt) => {
		if (clickEvent){
			evt.preventDefault();
			clickEvent();
		} else {
			return false;
		}
	}

	const classListString = [styles.actionLink, classes].filter(Boolean).join(' ');
	
	return (
		<div className={classListString} data-label={printString}>
			<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
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
