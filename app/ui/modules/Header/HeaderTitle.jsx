'use client'
import styles from "./Header.module.scss";
import { NameTitle } from '@/app/content/BodyContent';
import Link from 'next/link';

function HeaderTitle({location, children}){
	if (location === 'portfolio'){
		return (
			<h1 className={styles.header__sitename}>
				{children}
			</h1>
		)
	} else {
		return (
			<h2 className={styles.header__sitename}>
				{children}
			</h2>
		)
	}
}

export default HeaderTitle;