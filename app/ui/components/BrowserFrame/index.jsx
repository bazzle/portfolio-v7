import styles from "./BrowserFrame.module.scss";

function BrowserFrame({src, alt, type, extended, caption}){
	if(type === 'desktop'){
		const styleString = `${styles.browserDesktop} ${extended && styles.extended}`
		return(
			<figure>
				<div className={styleString}>
					<svg viewBox="0 0 1202 800" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="1202" height="800" rx="9.015" fill="#353535" />
						<circle cx="26.4654" cy="32.53" r="8.43515" fill="#FFAAAA"/>
						<circle cx="51.7706" cy="32.53" r="8.43515" fill="#FDFAA4"/>
						<circle cx="77.0763" cy="32.53" r="8.43515" fill="#9AF3FF"/>
						<rect x="104.81" y="18.03" width="1079.16" height="29" rx="6.01" fill="#272727" />
						<mask id="mask0_273_297" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="18" y="60" width="1166" height="722">
							<path d="M18 68.664C18 63.879 22.0364 60 27.0155 60H1174.98C1179.96 60 1184 63.879 1184 68.664V773.336C1184 778.121 1179.96 782 1174.98 782H27.0155C22.0364 782 18 778.121 18 773.336V68.664Z" fill="white"/>
						</mask>
						<g mask="url(#mask0_273_297)">
							<image
								href={src}
								width="100%"
								height="100%"
								alt={alt}
								x="0"
								y="21"
							/>
						</g>
					</svg>
				</div>
				{caption && <figcaption className={styles.browserFrame__caption}>{caption}</figcaption>}
			</figure>
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
