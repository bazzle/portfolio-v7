import styles from "./BrowserFrame.module.scss";

const desktopView = (src, alt, caption, extended) => {
	const styleString = `${styles.browserDesktop}`
	return(
		<figure className={styleString}>
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
			{caption && <figcaption className={styles.browserFrame__caption}>{caption}</figcaption>}
		</figure>
	)
}
const mobileView = (src, alt, caption, extended) => {
	return(
		<figure className={styles.browserMobile}>
			<svg width="406" height="800" viewBox="0 0 406 800" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="405.714" height="800" rx="8.57143" fill="#353535"/>
				<rect x="17.1426" y="17.1428" width="371.429" height="42.8571" rx="5.71429" fill="#272727"/>
				<mask id="mask0_753_334" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="17" y="74" width="372" height="704">
					<path d="M17.1426 82.8572C17.1426 78.1233 20.9801 74.2858 25.714 74.2858H380C384.734 74.2858 388.571 78.1233 388.571 82.8572V768.571C388.571 773.305 384.734 777.143 380 777.143H25.714C20.9801 777.143 17.1426 773.305 17.1426 768.571V82.8572Z" fill="white"/>
				</mask>
				<g mask="url(#mask0_753_334)">
					<rect x="14.6377" y="69" width="377.84" height="749" fill="url(#pattern0_753_334)"/>
				</g>
				<image
					href={src}
					width="100%"
					height="100%"
					mask="url(#mask0_753_334)"
					alt={alt}
					x="0"
					y="27"
				/>
			</svg>
			{caption && <figcaption className={styles.browserFrame__caption}>{caption}</figcaption>}
		</figure>
	)
}

function BrowserFrame({src, alt, mobile, caption, extended}){
	if (mobile){
		return mobileView(src, alt, caption, extended);
	} else {
		return desktopView(src, alt, caption, extended);
	}
}

export default BrowserFrame
