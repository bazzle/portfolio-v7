import styles from "./style.module.scss";

function IconTag({slug}){
	return(
		<svg className={styles[slug]} width="95" height="79" viewBox="0 0 95 79" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={`${styles.dark_mode_nobg} fill-accent-alt-faded stroke-accent-alt`} d="M0.935006 41.0499L47.4356 28.8857L55.254 33.3755L61.6269 57.7376L57.0085 65.4807L10.5079 77.6448L0.935006 41.0499Z" strokeWidth="1"/>
			<circle cx="51.2862" cy="47.3152" r="3.98947" transform="rotate(-14.6595 51.2862 47.3152)" className="stroke-accent" strokeWidth="2"/>
			<circle cx="51.2862" cy="47.3152" r="3.98947" transform="rotate(-14.6595 51.2862 47.3152)" className="stroke-accent" strokeWidth="2"/>
			<circle cx="51.2862" cy="47.3154" r="2.90015" transform="rotate(-14.6595 51.2862 47.3154)" className="stroke-accent" strokeWidth="2"/>
			<circle cx="51.2862" cy="47.3154" r="2.90015" transform="rotate(-14.6595 51.2862 47.3154)" className="stroke-accent" strokeWidth="2"/>
			<path d="M4.7561 27.0676H51.9304L57.9846 33.0226V57.6746L51.9304 63.6296H4.7561V27.0676Z" className="fill-bg stroke-accent" strokeWidth="2"/>
			<circle cx="51.2503" cy="45.2397" r="3.98947" className="stroke-accent" strokeWidth="1"/>
			<circle cx="51.2503" cy="45.2397" r="3.98947" className="stroke-accent" strokeWidth="1"/>
			<circle cx="51.2504" cy="45.2398" r="2.90015" className="stroke-accent" strokeWidth="1"/>
			<circle cx="51.2504" cy="45.2398" r="2.90015" className="stroke-accent" strokeWidth="1"/>
			<path className="fill-accent-alt-faded" d="M77.4738 30.7924C95.2082 17.7377 95.8438 4.65305 93.7738 2.07214C92.5078 0.756656 88.6066 -1.41737 85.7378 3.02122C82.869 7.45981 86.6071 12.2682 90.9538 14.444L91.2798 14.1177C86.8245 11.7243 83.8182 8.29362 86.0638 3.34758C87.6938 -0.242517 92.5838 0.84544 93.5618 2.36848C95.5178 5.95852 93.5618 13.465 86.0638 22.6032C67.8078 40.5534 54.3279 43.8471 52.0459 43.8471C50.4811 44.6304 51.3939 45.2613 52.0459 45.4789C53.1326 46.0229 59.7395 43.8471 77.4738 30.7924Z"/>
		</svg>
	)
}

export default IconTag