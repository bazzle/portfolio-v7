'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'
import styles from './FloatingNav.module.scss'

function FloatingNav({ sectionLinks }) {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'auto',
		})
	}

	const navClass = styles['floatingNav__nav']

	const motionSettings = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: 0.01,
			type: 'spring',
			stiffness: 200,
			damping: 30,
		},
	}

	useEffect(() => {
		const activeIntersections = new Map()

		const getLink = (id) => {
			return document.querySelector(`.${navClass} a[href="#${id}"]`)
		}

		const updateActiveLink = () => {
			const activeId = [...activeIntersections.entries()].sort(
				([, previousTime], [, nextTime]) => nextTime - previousTime,
			)[0]?.[0]

			sectionLinks.forEach(({ id }) => {
				const link = getLink(id)
				if (!link) return

				link.classList.toggle('active', id === activeId)
			})
		}

		// Init new IntersectionObserver
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeIntersections.set(entry.target.id, entry.time)
						return
					}

					activeIntersections.delete(entry.target.id)
				})

				updateActiveLink()
			},
			{ threshold: 0.5 },
		)

		// Create new array of DOM elements from page that match with sectionLinks
		const menuElements = sectionLinks
			.map(({ id }) => {
				const el = document.getElementById(id)
				if (!el) {
					console.log(`Floating nav ID mismatch: #${id}`)
					const link = document.querySelector(`.${navClass} a[href="#${id}"]`)
					if (link) link.classList.add(styles.unmatched)
				}
				return el
			})
			.filter(Boolean)

		// Run the observer on each one
		menuElements.forEach((el) => observer.observe(el))

		// Unobserve on unmount
		return () => {
			menuElements.forEach((el) => observer.unobserve(el))
			observer.disconnect()
		}
	}, [navClass])

	return (
		<>
			<motion.div className={styles.floatingNav} {...motionSettings}>
				<nav className={navClass}>
					{sectionLinks.map(({ name, id }) => (
						<a key={id} href={`#${id}`}>
							{name}
						</a>
					))}
				</nav>
				<button
					aria-label="Back to top"
					className={styles['floatingNav__backTop']}
					onClick={handleClick}
				>
					<svg
						width="33"
						height="33"
						viewBox="0 0 33 33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className="fill-bg"
							d="M3 0.5H30C31.3807 0.5 32.5 1.61929 32.5 3V32.5H0.5V3C0.5 1.61929 1.61929 0.5 3 0.5Z"
						/>
						<path
							className="stroke-accent"
							strokeWidth="1"
							d="M23.5 19.5002L16.5 13.5002L9.50024 19.4998"
						/>
					</svg>
				</button>
			</motion.div>
		</>
	)
}

export default FloatingNav
