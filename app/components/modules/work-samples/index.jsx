'use client'
import styles from './style.module.scss';
import BrowserMobile from './browser-mobile';
import BrowserDesktop from './browser-desktop';
import Section from '@/app/components/components/section';
import BgShapes from '@/app/components/components/bg-shapes';
import {workSamplesContent} from '@/app/content/body-content';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from "motion/react";

function WorkSamples(){

	const ref = useRef(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const left = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -100]
	)
	const right = useTransform(
		scrollYProgress,
		[0, 1],
		[100, 0]
	)

    return(
		<Section>
			<div ref={ref}>
				<div className={styles.work_samples}>
					<div className={styles.title_section}>
						<h2 className={styles.title_section_text}>{workSamplesContent.title}</h2>
					</div>
					<div className={styles.main}>
						<motion.div className={styles.strip} style={{ left }}>
							<BrowserDesktop
								src="/assets/images/samples/nao2-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/chevening-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/ua-dt.jpg"
								alt="profile"
							/>
							<BrowserMobile
								src="/assets/images/samples/bdo-mob.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/bdo-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/chevening2-dt.jpg"
								alt="profile"
							/>
							<BrowserMobile
								src="/assets/images/samples/nao2-mob.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/bfi-dt.jpg"
								alt="profile"
							/>
						</motion.div>
						<motion.div className={styles.strip}  style={{ right }} >
							<BrowserDesktop
								src="/assets/images/samples/chevening-dt.jpg"
								alt="profile"
							/>
							<BrowserMobile
								src="/assets/images/samples/ua-mob.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/nao2-dt.jpg"
								alt="profile"
							/>
							<BrowserMobile
								src="/assets/images/samples/nao-mob.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/bfi-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/ons-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/nao-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/ua2-dt.jpg"
								alt="profile"
							/>
							<BrowserDesktop
								src="/assets/images/samples/nao3-dt.jpg"
								alt="profile"
							/>
						</motion.div>
					</div>
					<BgShapes variant="3" />
				</div>
			</div>
		</Section>
    )
}

export default WorkSamples;