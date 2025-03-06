import styles from "./style.module.scss";
import PropTypes from "prop-types";

function Tile({ component, name, description }){

	function iconBlock(){
		return(
			<div className={styles.tile__icon}>
				{component}
			</div>
		)
	}
	return (
		<div className={`${styles.tile} ${component ? styles.tile_icon : styles.tile_noicon}`}>
			<div className={styles.tile__inner}>
				
				{component && iconBlock()}
				<div className={styles.tile__content}>
					<h3 className={styles.tile__name}>
						{name}
					</h3>
					<p className={styles.tile__description}>
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