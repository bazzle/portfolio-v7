'use client'
import ColourMode from '@/app/ui/components/ColourModeSwitcher';
import { nameTitle } from '@/content/body-content';
import Link from 'next/link';
import { useContext } from 'react';
import { pageCheckContext } from '@/context/HomePageCheck.jsx';
import styles from './Header.module.scss';

function Header(){
	const { isHome } = useContext(pageCheckContext);

	const siteName = isHome ? (
		<h1>{nameTitle.title}</h1>
	) : (
		<Link href="/">
			{nameTitle.title}
		</Link>
	)
	
    return(
        <header className={styles.header}>
			<div className="content-container">
				<div className={styles.header__inner}>
					<div className={styles.header__sitename}>
						{siteName}
					</div>
					<div className={styles.header__line}>
						<hr />
						<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
					</div>
				</div>
			</div>
			<ColourMode/>
        </header>
    )
}

export default Header;
