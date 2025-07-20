
import PropTypes from "prop-types";

function Tile({ component, nameFirstLine, nameSecondLine, description }){

	function iconBlock(){
		return(
			<div className="tile__icon">
				{component}
			</div>
		)
	}
	return (
		<div className={`tile ${component ? "tile____icon" : "tile____noicon"}`}>
			<div className="tile__inner">
				
				{component && iconBlock()}
				<div className="tile__content">
					<h3 className="tile__name">
						<span>{nameFirstLine}</span>
						{nameSecondLine && <span>{nameSecondLine}</span>}
					</h3>
					<p className="tile__description">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

Tile.propTypes = {
	component : PropTypes.elementType,
	name : PropTypes.string.isRequired,
	description : PropTypes.string.isRequired
}

export default Tile