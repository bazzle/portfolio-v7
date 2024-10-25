import styles from "./style.module.scss";

function IconMagGlass({slug}){
	return(
		<svg className={styles[slug]} width="60" height="77" viewBox="0 0 56 73" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="24.1119" cy="24.1051" r="22.494" className="stroke-accent-alt" strokeWidth="2.13766"/>
			<rect x="37.5532" y="47.4784" width="3.96259" height="28.5379" transform="rotate(-30 37.5532 47.4784)" className="stroke-accent" strokeWidth="0.735623"/>
		</svg>
	)
}

export default IconMagGlass