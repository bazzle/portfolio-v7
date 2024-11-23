import styles from './style.module.scss';

function Spacer({shallow, mobile, noMobile, noLine, noLineMobile, deep}){
	let classString =(`
		${styles.spacer}
		${mobile ? styles.spacer_mobile : ''}
		${noMobile ? styles.spacer_nomobile : ''}
		${shallow ? styles.spacer_shallow : ''}
		${noLine ? styles.spacer_noline : ''}
		${noLineMobile ? styles.spacer_nolinemobile : ''}
		${deep ? styles.spacer_deep : ''}
		`).replace(/\s+/g, ' ');

	return(
		<div className={classString || undefined} role="presentation">
		</div>
	)
}

export default Spacer;