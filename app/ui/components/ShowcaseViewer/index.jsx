'use client'
import styles from "./ShowcaseViewer.module.scss"
import BrowserFrame from "@/app/ui/components/BrowserFrame"
import enableGrabScroll from "@/app/utils/grab-scroll"
import { useEffect, useRef } from "react";

export default function ShowcaseViewer({children}){

	const element = useRef(null)
	useEffect(()=>{
		enableGrabScroll(element);
	}),[]

	return (
		<div className={styles.showcaseViewer} ref={element}>
			<div className={styles.inner}>
				{children}
			</div>
		</div>
	)
}