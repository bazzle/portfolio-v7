import styles from "./Spacer.module.scss";

function Spacer({mobile, noMobile, shallow, noLine, noLineMobile, noMarginTop, noMarginBottom, shallowTop}){
	const classString = [
		styles.spacer,
		mobile && styles.spacer_mobile,
		noMobile && styles.spacer_nomobile,
		shallow && styles.spacer_shallow,
		noLine && styles.spacer_noline,
		noLineMobile && styles.spacer_nolinemobile,
		noMarginTop && styles.spacer_nomargin_top,
		noMarginBottom && styles.spacer_nomargin_bottom,
		shallowTop && styles.spacer_shallow_top
	].filter(Boolean).join(' ');

	return(
		<div className={classString || undefined} role="presentation">
		</div>
	)
}

export default Spacer;
