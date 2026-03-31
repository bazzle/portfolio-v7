'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import Icons from '@/app/ui/project/misc/Icons'
import { useTheme } from 'next-themes'

function Header({ headerTitle, headingLevel, navLinks }) {
	const { resolvedTheme, setTheme } = useTheme()

	const arrowOutput = (direction) => {
		if (direction === 'reverse'){
			return (
				<span className={styles.arrow____reverse}>{Icons.arrow}</span>
			)
		} else {
			<span className={styles.arrow}>{Icons.arrow}</span>
		}
	}

	const linkOutput = (item, index) => {
		return (
			<Link className={styles.header__nav__link} href={item.target} key={index}>
				{
					item.arrowDirection && arrowOutput(item.arrowDirection)
				}
				<span>{item.text}</span>
			</Link>
		)
	}

	const h1Heading = <h1 className={styles.header__sitename}>{headerTitle}</h1>
	const h2Heading = <h2 className={styles.header__sitename}>{headerTitle}</h2>

	const headingOutput = () => {
		(headingLevel && headingLevel === 1) ? h1Heading : h2Heading
	}

	return (
		<header className={styles.header}>
			<div className="container____toEdgesMobile">
				<div className={styles.header__inner}>
					{headingOutput()}
					{navLinks && (
						<nav className={styles.header__nav}>
							{navLinks.map((item, index) => linkOutput(item, index))}
						</nav>
					)}
					<button className={styles.header__modeSwitcher} onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
						{Icons.modeSwitcher}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
