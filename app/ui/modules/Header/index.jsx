'use client';

import { NameTitle } from '@/app/content/BodyContent';
import FloatingNav from '@/app/ui/components/FloatingNav';
import FloatingBackTop from '@/app/ui/components/FloatingBackTop';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./Header.module.scss";
import {Icons} from "@/app/ui/misc/Icons";

function Header({location}){
	
	const pathname = usePathname();

	let navLinks

	if (location === 'blog'){
		navLinks = [
			(
				<Link className={styles.header__nav__link} href="/" key="1">
					<span className={styles.arrow____reverse}>
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			)
		]
	} else if (location === 'blog-single'){
		navLinks = [
			(
				<Link className={styles.header__nav__link} href="/" key="1">
					<span className={styles.arrow____reverse}>
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			),
			(
				<Link className={styles.header__nav__link} href="/thoughts" key="2">
					<span>Thoughts index</span>
				</Link>
			)
		]
	} else if (location === 'tag-single'){
		navLinks = [
			(
				<Link className={styles.header__nav__link} href="/" key="1">
					<span className={styles.arrow____reverse}>
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			),
			(
				<Link className={styles.header__nav__link} href="/thoughts" key="2">
					<span>Thoughts index</span>
				</Link>
			)
		]
	} else if (location === 'portfolio'){
		navLinks = [
			(
				<Link className={styles.header__nav__link} href="/thoughts" key="1">
					<span>Thoughts</span>
					<span className={styles.arrow}>
						{Icons.arrow}
					</span>
				</Link>
			)
		]
	} else {
		navLinks = [
			(
				<Link className={styles.header__nav__link} href="/" key="1">
					<span className={styles.arrow}>
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			)
		]
	}

	return(
		<header className={styles.header}>
				<div className="container____toEdgesMobile">
					<div className={styles.header__inner}>
						<h1 className={styles.header__sitename}>
							<Link className={styles.header__sitename__link} href="/">
								<span className='highlight-on-link'>
									{NameTitle.name}
								</span>
								<span>
									{NameTitle.title}
								</span>
							</Link>
						</h1>
						<nav className={styles.header__nav}>
							{ navLinks.map((item, index)=>(item)) }
						</nav>
					</div>
				</div>
				{pathname === '/' ? <FloatingNav/> : <FloatingBackTop/>}
		</header>
	)
}

export default Header;
