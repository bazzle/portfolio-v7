'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import styles from './Profile.module.scss'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function Profile() {
	const { resolvedTheme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	const src = mounted && resolvedTheme === 'dark'
		? '/images/profile-alt-exp.png'
		: '/images/profile-alt-exp-inv.png'

	return (
		<div className={styles.profile}>
			<motion.div
				className={styles['profile__inner']}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				transition={{
					duration: 0.01,
					delay: 0.3,
					type: 'spring',
					stiffness: 200,
					damping: 30,
				}}
			>
				<Image
					width="200"
					height="200"
					src={src}
					alt="Profile image"
				/>
			</motion.div>
		</div>
	)
}

export default Profile
