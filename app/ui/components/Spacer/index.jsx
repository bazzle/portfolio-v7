

function Spacer({mobile, noMobile, shallow, noLine, noLineMobile, noMarginTop, noMarginBottom, shallowTop}){
	let classString =(`
		${'spacer'}
		${mobile ? 'spacer_mobile' : ''}
		${noMobile ? 'spacer_nomobile' : ''}
		${shallow ? 'spacer_shallow' : ''}
		${noLine ? 'spacer_noline' : ''}
		${noLineMobile ? 'spacer_nolinemobile' : ''}
		${noMarginTop ? 'spacer_nomargin_top' : ''}
		${noMarginBottom ? 'spacer_nomargin_bottom' : ''}
		${shallowTop ? 'spacer_shallow_top' : ''}
		`).replace(/\s+/g, ' ');

	return(
		<div className={classString || undefined} role="presentation">
		</div>
	)
}

export default Spacer;