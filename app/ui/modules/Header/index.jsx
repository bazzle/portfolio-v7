'use client';

import { NameTitle } from '@/app/content/BodyContent';
import FloatingNav from '../../components/FloatingNav';
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
				<Link className={styles.header__nav} href="/" key="1">
					<span className="rotate180">
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			)
		]
	} else if (location === 'blog-single'){
		navLinks = [
			(
				<Link className={styles.header__nav} href="/" key="1">
					<span className="rotate180">
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			),
			(
				<Link className={styles.header__nav} href="/thoughts" key="2">
					<span>Thoughts index</span>
				</Link>
			)
		]
	} else if (location === 'tag-single'){
		navLinks = [
			(
				<Link className={styles.header__nav} href="/" key="1">
					<div className="rotate180">
						{Icons.arrow}
					</div>
					<span>Homepage</span>
				</Link>
			),
			(
				<Link className={styles.header__nav} href="/thoughts" key="2">
					<span>Thoughts index</span>
				</Link>
			)
		]
	} else if (location === 'portfolio'){
		navLinks = [
			(
				<Link className={styles.header__nav} href="/thoughts" key="1">
					<span>Thoughts</span>
					<span>{Icons.arrow}</span>
				</Link>
			)
		]
	} else {
		navLinks = [
			(
				<Link className={styles.header__nav} href="/" key="1">
					<span className="rotate180">
						{Icons.arrow}
					</span>
					<span>Homepage</span>
				</Link>
			)
		]
	}

	return(
		<header className={styles.header}>
				<div className="container">
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
				{pathname === '/' && <FloatingNav/>}
		</header>
	)
}

export default Header;
