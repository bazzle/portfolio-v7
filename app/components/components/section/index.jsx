import styles from './style.module.scss';
import propTypes from "prop-types";
import Spacer from '@/app/components/components/spacer';

function Section({ children, id, classes, noSpacer, line }) {
  const classString = (classes ? classes : '').replace(/\s+/g, ' ');

  // Use classString as the value for the className attribute
  return (
    <section id={id} className={classString || undefined}>
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
};

export default Section;
