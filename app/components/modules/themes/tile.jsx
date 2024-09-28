import styles from "./style.module.scss";
import PropTypes from "prop-types";

function Tile({ component, name }){

	function iconBlock(){
		return(
			<div className={styles.icon_container}>{component}</div>
		)
	}
	return (
		<div className={`${styles.tile} ${component ? styles.tile_icon : styles.tile_noIcon}`}>
			<div className={styles.tile__inner}>
				{component && iconBlock()}
				<div className={styles.tile__name}>
					{name}
				</div>
			</div>
		</div>
	)
}

Tile.propTypes = {
	component : PropTypes.elementType,
	name : PropTypes.string.isRequired
}

export default Tile