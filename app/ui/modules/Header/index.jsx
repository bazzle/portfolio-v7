'use client';

import { NameTitle } from '@/app/content/BodyContent';
import FloatingNav from '../../components/FloatingNav';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./Header.module.scss";
import {Icons} from "@/app/ui/misc/Icons";

function Header({location}){
        const pathname = usePathname();
		let navLink
		if (location === 'blog'){
			navLink = (
				<Link className={styles.header__nav} href="/">Homepage
					{Icons.backArrow}
				</Link>
			)
		} else if (location === 'portfolio'){
			navLink = (
				<Link href="/thoughts">Thoughts
					{Icons.backArrow}
				</Link>
			)
		} else {
			navLink = (
				<Link href="/">Homepage
					{Icons.backArrow}
				</Link>
			)
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
								{navLink}
							</nav>
						</div>
					</div>
					{pathname === '/' && <FloatingNav/>}
			</header>
        )
}

export default Header;

