'use client'

import { useEffect, useState } from 'react'
import styles from './ContactLinks.module.scss'
import Icons from '@/app/ui/project/misc/Icons'

export default function CopyEmail({ text }) {
	const emailAddress = 'barry@br-web.me'
	const [didCopyEmail, setDidCopyEmail] = useState(false)

	useEffect(() => {
		if (!didCopyEmail) {
			return
		}
		const resetTimer = setTimeout(() => setDidCopyEmail(false), 1600)
		return () => clearTimeout(resetTimer)
	}, [didCopyEmail])

	async function handleCopyEmail() {
		try {
			await navigator.clipboard.writeText(emailAddress)
			setDidCopyEmail(true)
		} catch (error) {
			console.log('Failed to copy email address.', error)
		}
	}

	const toolTip = <span className={styles.tooltip}>Copied!</span>

	return (
		<button className={styles.trigger} onClick={handleCopyEmail}>
			{Icons.email}
			<span>{text}</span>
			{didCopyEmail && toolTip}
		</button>
	)
}
