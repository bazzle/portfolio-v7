'use client'
import { useEffect, useState } from 'react'
import styles from './ShareButtons.module.scss'
import {
	XShareButton,
	XIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon,
	EmailShareButton,
	EmailIcon,
} from 'react-share'

function ShareButtons({ title, excerpt, preText }) {
	const [shareUrl, setShareUrl] = useState('')
	const emailBody = shareUrl
	const mailtoHref = shareUrl
		? `mailto:?subject=${encodeURIComponent(title)}&body=${emailBody}`
		: undefined

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setShareUrl(window.location.href)
		}
	}, [])
	return (
		<div className={styles.shareButtons}>
			<div className={styles.shareButtons__label}>
				{preText ? preText : 'Share this post'}
			</div>
			<div className={styles.shareButtons__divider}></div>
			<div className={styles.shareButtons__list}>
				<XShareButton
					url={shareUrl}
					htmlTitle="Share on X"
					title={title}
					resetButtonStyle
				>
					<XIcon
						round={false}
						size={36}
						iconFillColor="var(--color-fg)"
						bgStyle={{ fill: 'var(--color-bg-solid)' }}
					/>
				</XShareButton>

				<TelegramShareButton
					url={shareUrl}
					htmlTitle="Share on Telegram"
					title={title}
				>
					<TelegramIcon
						round={false}
						size={36}
						iconFillColor="var(--color-fg)"
						bgStyle={{ fill: 'var(--color-bg-solid)' }}
					/>
				</TelegramShareButton>

				<LinkedinShareButton
					url={shareUrl}
					htmlTitle="Share on LinkedIn"
					title={title}
					summary={excerpt}
					source="Thoughts at 2am"
				>
					<LinkedinIcon
						round={false}
						size={36}
						iconFillColor="var(--color-fg)"
						bgStyle={{ fill: 'var(--color-bg-solid)' }}
					/>
				</LinkedinShareButton>

				<a
					className={styles.shareButtons__mailto}
					href={mailtoHref}
					title="Share by email"
					aria-disabled={!mailtoHref}
					onClick={!mailtoHref ? (e) => e.preventDefault() : undefined}
				>
					<EmailIcon
						round={false}
						size={36}
						iconFillColor="var(--color-fg)"
						bgStyle={{ fill: 'var(--color-bg-solid)' }}
					/>
				</a>
			</div>
		</div>
	)
}

export default ShareButtons
