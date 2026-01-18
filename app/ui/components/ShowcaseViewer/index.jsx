'use client'
import styles from "./ShowcaseViewer.module.scss"
import BrowserFrame from "@/app/ui/components/BrowserFrame"
import enableGrabScroll from "@/app/utils/grab-scroll"
import { useEffect, useRef, useState } from "react";
import clsx from 'clsx';

export default function ShowcaseViewer({children}){

	const parent = useRef(null)
	const child = useRef(null)
	const [isScroll, setIsScroll] = useState(true)
	useEffect(()=>{
		const p = parent.current
		const c = child.current
		if (!p || !c) return

		const measure = () => {
			if (c.offsetWidth < p.offsetWidth){
				setIsScroll(false)
			} else {
				enableGrabScroll(p)
				setIsScroll(true)
			}
		}
		const ro = new ResizeObserver(measure)
		ro.observe(p)
		ro.observe(c)
		measure()

		return () => {
			ro.disconnect()
		}
	},[])

	return (
		<div className={clsx(
			styles.showcaseViewer,
			!isScroll && styles.showcaseViewer____noScroll
		)} ref={parent}>
			<div className={styles.showcaseViewer__inner} ref={child}>
				{children}
			</div>
		</div>
	)
}
