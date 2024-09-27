import propTypes from 'prop-types';
import styles from './style.module.scss';

function BrowserMobile({src, alt}){
    return(
		<div className={styles.browser_mobile}>
			<svg viewBox="0 0 142 280" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="142" height="280" rx="3" fill="#1C1C1C"/>
			<rect x="6" y="6" width="130" height="15" rx="2" fill="#383838"/>
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

BrowserMobile.propTypes = {
    src : propTypes.string.isRequired,
	alt : propTypes.string.isRequired
}

export default BrowserMobile;