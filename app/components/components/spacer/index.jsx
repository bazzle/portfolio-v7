import styles from './style.module.scss';

function Spacer(props){
	const classString = `${styles.spacer} ${props.mobile && styles.spacer_mobile}`;
	return(
		<div className={classString} role="presentation">
		</div>
	)
}

export default Spacer;