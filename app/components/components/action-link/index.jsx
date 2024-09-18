import propTypes from "prop-types";

function ActionLink({linkString, textString}){
	return (
		<div className="c-action-link">
			<svg className="dot" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
			<a href={linkString}>{textString}</a>
		</div>
	)
}

ActionLink.propTypes = {
	linkString : propTypes.string,
	textString : propTypes.string
}

export default ActionLink;