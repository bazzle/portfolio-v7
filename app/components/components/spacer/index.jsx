import styles from './style.module.scss';

function Spacer({shallow, mobile, noLine}){
	const classString =`${styles.spacer} ${mobile ? styles.spacer_mobile : ''} ${shallow ? styles.spacer_shallow : ''} ${noLine ? styles.spacer_noline : ''}`.trim();
	return(
		<div className={classString || undefined} role="presentation">
		</div>
	)
}

export default Spacer;