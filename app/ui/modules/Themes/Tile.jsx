
import PropTypes from "prop-types";
import styles from "./Themes.module.scss";

function Tile({ component, nameFirstLine, nameSecondLine, description }){

	function iconBlock(){
		return(
			<div className={styles["tile__icon"]}>
				{component}
			</div>
		)
	}

	const tileClasses = [
		styles.tile,
		!component && styles["tile____noicon"]
	].filter(Boolean).join(' ');

	return (
		<div className={tileClasses}>
			<div className={styles["tile__inner"]}>
				{component && iconBlock()}
				<div>
					<h3 className={styles["tile__name"]}>
						<span>{nameFirstLine}</span>
						{nameSecondLine && <span>{nameSecondLine}</span>}
					</h3>
					<p className={styles["tile__description"]}>
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
