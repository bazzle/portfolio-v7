import styles from "./BrowserFrame.module.scss";

function BrowserFrame({src, alt, type, extended}){
	if(type === 'desktop'){
		const styleString = `${styles.browserDesktop} ${extended && styles.extended}`
		return(
			<div className={styleString}>
				<svg viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="400" height="280" rx="3" className="fill-bg"/>
					<circle cx="10" cy="13.5" r="4" fill="#FFAAAA"/>
					<circle cx="22" cy="13.5" r="4" fill="#FDFAA4"/>
					<circle cx="34" cy="13.5" r="4" fill="#9AF3FF"/>
					<rect x="45" y="6" width="349" height="15" rx="2" className="fill-bg-solid"/>
					<mask id="mask0_273_297" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="6" y="29" width="388" height="245">
						<path d="M6 31.94C6 30.3163 7.34315 29 9 29H391C392.657 29 394 30.3163 394 31.94V271.06C394 272.684 392.657 274 391 274H9.00001C7.34315 274 6 272.684 6 271.06V31.94Z" fill="white"/>
					</mask>
					<image
						href={src}
						width="100%"
						height="100%"
						mask="url(#mask0_273_297)"
						alt={alt}
						x="0"
						y="30"
					/>
				</svg>
			</div>
		)
	} else if(type === 'mobile'){
		return(
			<div className={styles.browserMobile}>
				<svg viewBox="0 0 142 280" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect width="142" height="280" rx="3" className="fill-bg" />
					<rect x="6" y="6" width="130" height="15" rx="2" className="fill-bg-solid"/>
					<mask id="mask0_273_290" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="6" y="26" width="130" height="246">
						<path d="M6 29C6 27.3431 7.34315 26 9 26H133C134.657 26 136 27.3431 136 29V269C136 270.657 134.657 272 133 272H9C7.34315 272 6 270.657 6 269V29Z" fill="black" fillOpacity="1"/>
					</mask>
					<image
						href={src}
						width="100%"
						height="100%"
						mask="url(#mask0_273_290)"
						alt={alt}
						x="0"
						y="10"
					/>
				</svg>
			</div>
		)
	}

}

export default BrowserFrame