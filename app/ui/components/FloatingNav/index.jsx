'use client';

import { useEffect } from 'react';
import { motion } from "motion/react";
import styles from "./FloatingNav.module.scss";

const handleClick = () => {
	window.scrollTo({
		top: 0,
		behavior: 'auto'
	});
};



function FloatingNav( {sectionNav} ){

	const navClass = styles["floatingNav__nav"];

	class SectionLink {
		constructor(name, id) {
			this.name = name,
			this.id = id;
		}
	}
	const sectionLinks = [
		new SectionLink('who I am', 'who-i-am'),
		new SectionLink('what am I', 'what-am-i'),
		new SectionLink('Things I think about', 'about-me'),
		new SectionLink('Work history', 'work-history'),
		new SectionLink('Get in Touch', 'get-in-touch')
	]

	const motionSettings = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: 0.01,
			type: "spring",
			stiffness: 200,
			damping: 30,
		},
	};

	const showSectionNav = sectionNav === true

	return(
		<>
			<motion.div className={styles.floatingNav} {...motionSettings}>
				{ showSectionNav && (
					<nav className={navClass}>
						{sectionLinks.map(({name, id}) => (
							<a key={id} href={`#${id}`}>{name}</a>
						))}
					</nav>
				)}
				<button aria-label='Back to top' className={styles["floatingNav__backTop"]} onClick={handleClick}>
					<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="fill-bg" d="M3 0.5H30C31.3807 0.5 32.5 1.61929 32.5 3V32.5H0.5V3C0.5 1.61929 1.61929 0.5 3 0.5Z"/>
						<path className="stroke-accent" strokeWidth="1" d="M23.5 19.5002L16.5 13.5002L9.50024 19.4998"/>
					</svg>
				</button>
			</motion.div>
		</>
	)

}

export default FloatingNav;
