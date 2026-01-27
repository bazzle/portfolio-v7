'use client'
import styles from "./ShowcaseViewer.module.scss"
import enableGrabScroll from "@/app/utils/grab-scroll"
import { useEffect, useRef, useState } from "react";
import clsx from 'clsx';

export default function ShowcaseViewer({children, type}){

	const parent = useRef(null)
	const child = useRef(null)
	const [isScroll, setIsScroll] = useState(true)
	useEffect(()=>{
		const p = parent.current
		const c = child.current
		if (!p || !c) return
		console.log('child')
		console.log(c.offsetWidth)
		console.log('parent')
		console.log(p.offsetWidth)
		if (c.offsetWidth < p.offsetWidth){
			setIsScroll(false)
		} else {
			enableGrabScroll(p)
			setIsScroll(true)
		}
	},[])

	return (
		<div className={clsx(
			styles.showcaseViewer,
			type === 'desktop' && styles.showcaseViewer____desktop,
			(isScroll) ? styles.scroll : styles.resetScroll
		)} ref={parent}>
			<div className={styles.showcaseViewer__inner} ref={child}>
				{children}
			</div>
		</div>
	)
}
