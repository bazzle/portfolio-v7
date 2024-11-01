import styles from './style.module.scss';
import propTypes from "prop-types";

function Section({children, id, classes}){


	
	return(
		<section id={id} className={`${styles.section} ${classes ? classes : ''}`}>
			{children}
		</section>
	)
}

Section.propTypes = {
	children : propTypes.node,
	id : propTypes.string,
	classes : propTypes.string,
	spacings : propTypes.array
}

export default Section;