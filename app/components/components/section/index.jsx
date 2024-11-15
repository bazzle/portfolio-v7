import styles from './style.module.scss';
import propTypes from "prop-types";
import Spacer from '@/app/components/components/spacer';

function Section({ children, id, classes, noSpacer, noSpacerPrint, line }) {
	let classString = classes
	if (noSpacerPrint){
		classString = `${classes} no_spacer_print`
	}
	return (
		<section id={id} className={classString}>
			{children}
			{ noSpacer ? '' : (line ? <Spacer /> : <Spacer noLine />)}
		</section>
  	);
}

Section.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  classes: propTypes.string,
  line: propTypes.bool,
  noSpacer: propTypes.bool,
  noSpacerPrint: propTypes.bool
};

export default Section;
