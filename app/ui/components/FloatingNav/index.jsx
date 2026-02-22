'use client';

import { useEffect } from 'react';
import { motion } from "motion/react";
import styles from "./FloatingNav.module.scss";

function FloatingNav( {sectionNav} ){

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		});
	};

	const navClass = styles["floatingNav__nav"];

	class SectionLink {
		constructor(name, id) {
			this.name = name,
			this.id = id;
		}
	}
	const sectionLinks = [
		new SectionLink('who am I', 'who-am-i'),
		new SectionLink('what am I', 'what-am-i'),
		new SectionLink('What I think about', 'about-me'),
		new SectionLink('Thinking and working on', 'currently-feed'),
		new SectionLink('Work samples', 'work-samples'),
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

	useEffect(() => {
		// Init new IntersectionObserver
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const link = document.querySelector(`.${navClass} a[href="#${entry.target.id}"]`);
				if (link) {
					entry.isIntersecting ? link.classList.add("active") : link.classList.remove("active");
				}
			});
		}, { threshold: 0.5 });

		// Create new array of DOM elements from page that match with sectionLinks
		const menuElements = sectionLinks.map(({ id }) => {
			const el = document.getElementById(id);
			if (!el) {
				console.log(`Floating nav ID mismatch: #${id}`);
				const link = document.querySelector(`.${navClass} a[href="#${id}"]`);
				if (link) link.classList.add(styles.unmatched)
			}
			return el
		}).filter(Boolean);

		// Run the observer on each one
		menuElements.forEach((el) => observer.observe(el));

		// Unobserve on unmount
		return () => {
			menuElements.forEach((el) => observer.unobserve(el));
			observer.disconnect();
		};
	}, [navClass]);

	return(
		<>
			<motion.div className={styles.floatingNav} {...motionSettings}>
				{ sectionNav && (
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
