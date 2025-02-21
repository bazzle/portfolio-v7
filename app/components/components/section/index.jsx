import styles from './style.module.scss';
import propTypes from "prop-types";
import Spacer from '@/app/components/components/spacer';

function Section({ children, id, classes, noSpacer, noSpacerPrint, mobile, noMobile, noLine, noLineMobile, deep }) {
	let classString = classes
	const spacerProps = {
		...(noSpacer && { noSpacer: true }),
		...(noSpacerPrint && { noSpacerPrint: true }),
		...(mobile && { mobile: true }),
		...(noMobile && { noMobile: true }),
		...(noLine && { noLine: true }),
		...(noLineMobile && { noLineMobile: true }),
		...(deep && { deep: true })
	};
	return (
		<section id={id} className={classString}>
			{children}
			{ noSpacer ? '' : <Spacer {...spacerProps} />}
		</section>
  	);
}

Section.propTypes = {
  children: propTypes.node,
  id: propTypes.string,
  classes: propTypes.string,
  noSpacer: propTypes.bool,
  noSpacerPrint: propTypes.bool,
  noMobile: propTypes.bool,
  noLine: propTypes.bool,
  noLineMobile: propTypes.bool
};

export default Section;
