'use client'

import { useState, useEffect } from 'react'
import Clients from './Clients'
import BgShapes from '@/app/ui/components/BgShapes'
import Spacer from '@/app/ui/components/Spacer'
import Profile from '@/app/ui/components/Profile'
import Link from 'next/link'
import styles from './HeroHomepage.module.scss'

function HeroHomepage() {
	const [popped, setPopped] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setPopped(true), 1000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className={styles.hero}>
			<div className={styles['hero__mainSection']}>
				<div className="container container--vertical-fill">
					<div className={styles['hero__mainSection__inner']}>
						<p className={styles['hero__mainSection__message']}>
							<span className={styles['hero__mainSection__message__sub']}>My philosophy is</span>
							<span className={styles['hero__mainSection__message__main']}>
								Web for <span className={styles.messageHighlight}> Everyone</span>
							</span>
							<span className={styles['hero__mainSection__message__sub']}>
								... But still <span className={styles['pop']}>POP {popped ? '\uD83D\uDCA5' : '\uD83C\uDF88'}</span>
							</span>
						</p>
					</div>
				</div>
				<div className={styles['hero__profile']}>
					<Profile />
				</div>
				<BgShapes variant="1" />
			</div>
			<div className={styles['hero__footSection']}>
				<div className={styles['hero__footSection__inner']}>
					<div className="container">
						<div className={styles['hero__footSection__intro']}>
							<div className={styles['hero__footSection__intro__main']}>
								<p>
									<strong>Hello! I design and build inclusive digital experiences</strong>
									<br />
									Read on to learn more,{' '}
									<a href="./files/cv.pdf" target="_blank" rel="noopener noreferrer">
										download my CV
									</a>{' '}
									or <Link href="#get-in-touch">Get in touch</Link>!
								</p>
							</div>
						</div>
						<Spacer mobile />
						<Clients />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroHomepage
