'use client'

import { motion } from 'motion/react'
import Clients from './Clients'
import BgShapes from '@/app/ui/project/components/BgShapes'
import Spacer from '@/app/ui/project/components/Spacer'
import Profile from '@/app/ui/project/components/Profile'
import EmojiSwap from '@/app/ui/project/components/EmojiSwap'
import MessageHighlight from './MessageHighlight'
import Link from 'next/link'
import styles from './HeroHomepage.module.scss'
import WorkSamples from '../WorkSamples'

function HeroHomepage() {
	return (
		<div className={styles.hero}>
			<div className={styles['hero__mainSection']}>
				<div className="container container--vertical-fill">
					<div className={styles['hero__mainSection__inner']}>
						<p className={styles['hero__mainSection__message']}>
							<motion.span
								className={styles['hero__mainSection__message__sub']}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 0.5 }}
							>My philosophy is</motion.span>
							<motion.span
								className={styles['hero__mainSection__message__main']}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								Web for <MessageHighlight> Everyone</MessageHighlight>
							</motion.span>
							<motion.span
								className={styles['hero__mainSection__message__sub']}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.6, delay: 1.9 }}
							>
								... But still{' '}
								<span className={styles['pop']}>
									<motion.span
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.6, delay: 3 }}
									>POP</motion.span> <EmojiSwap initial="🎈" after="💥" delay={3000} />
								</span>
							</motion.span>
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
									<strong>Hello! I design and build inclusive digital experiences</strong> <br/>
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
