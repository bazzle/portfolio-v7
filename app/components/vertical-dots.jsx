import propTypes from "prop-types";

function VerticalDots({numDots}){
    let dotsArray = [];
    for (let index = 0; index < numDots; index++){
        dotsArray.push(
			<svg className="dot" key={index} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
        );
    }
    return (
        <div className="vertical-dots">
            {dotsArray}
        </div>
    )
}

VerticalDots.propTypes = {
    numDots: propTypes.number
}

export default VerticalDots;