import styles from "./style.module.scss";

function IconShapes({slug}){
	return(
		<svg className={styles[slug]} width="113" height="87" viewBox="0 0 113 87" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1.12134" y="0.592773" width="55.3808" height="55.3808" className="fill-bg stroke-accent-alt" strokeWidth="0.5"/>
			<rect x="30.7822" y="31.5142" width="54.8808" height="54.8808" className="fill-bg stroke-accent-alt" stroke="white"/>
			<rect x="57.3318" y="1.34277" width="53.8808" height="53.8808" className="fill-accent-alt-faded stroke-accent" strokeWidth="3"/>
		</svg>

	)
}

export default IconShapes