'use client'

import { NameTitle, sectionLinksHome } from '@/app/content/BodyContent'
import FloatingNav from '@/app/ui/project/components/FloatingNav'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Header.module.scss'
import Icons from '@/app/ui/project/misc/Icons'
import HeaderTitle from './HeaderTitle'
import { useTheme } from 'next-themes'

function Header({ navLinks, arrowDirection }) {
	const pathname = usePathname()
	const { resolvedTheme, setTheme } = useTheme()

	const arrowOutput = (direction) => {
		if (direction === 'backwards')(
			<span className={styles.arrow____reverse}>{Icons.arrow}</span>
		)
		else (
			<span className={styles.arrow}>{Icons.arrow}</span>
		)
	}

	const linkOutput = (item, index, arrowDirection) => {
		return (
			<Link className={styles.header__nav__link} href={item.target} key={index}>
				{
					arrowDirection && arrowOutput(arrowDirection)
				}
				<span className={styles.arrow____reverse}>{Icons.arrow}</span>
				<span>{item.text}</span>
			</Link>
		)
	}

	return (
		<header className={styles.header}>
			<div className="container____toEdgesMobile">
				<div className={styles.header__inner}>
					<HeaderTitle location={location}>
						<Link className={styles.header__sitename__link} href="/">
							<span className="highlight-on-link">{NameTitle.name}</span>
							<span>{NameTitle.title}</span>
						</Link>
					</HeaderTitle>
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
			{location === 'home' ? (
				<FloatingNav sectionLinks={sectionLinksHome} />
			) : (
				<FloatingNav />
			)}
		</header>
	)
}

export default Header
