import styles from './style.module.scss';
import propTypes from "prop-types";

function Section({ children, id, line, noSpacing, noMinHeight }) {
	let classString = `${styles.section} ${line ? styles.section_line : ''} ${noSpacing ? styles.section_no_spacing : ''} ${noMinHeight ? styles.section_no_min_height : ''}`;
	return (
		<section id={id} className={classString}>
			{children}
		</section>
  	);
}

Section.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  noSpacing: propTypes.bool,
  noSpacingPrint: propTypes.bool,
  noMobile: propTypes.bool,
  line: propTypes.bool,
  noMinHeight: propTypes.bool
};

export default Section;
