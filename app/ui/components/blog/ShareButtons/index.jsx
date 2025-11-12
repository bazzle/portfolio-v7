'use client'
import { useEffect, useState } from "react";
import styles from "./ShareButtons.module.scss";
import {
	TwitterShareButton,
	XIcon,
	LinkedinShareButton,
	LinkedinIcon,
	TelegramShareButton,
	TelegramIcon,
	EmailShareButton,
	EmailIcon
} from "react-share";

function ShareButtons({title, excerpt, preText}){
    const [shareUrl, setShareUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setShareUrl(window.location.href);
        }
    }, []);
	return(
		<div className={styles.shareButtons}>
			<div className={styles.shareButtons__label}>
				{preText ? preText : 'Share this post'}
			</div>
			<div className={styles.shareButtons__divider}></div>
			<div className={styles.shareButtons__list}>
				<TwitterShareButton
					url={shareUrl} 
					htmlTitle="Share on X" 
					title={title} 
					resetButtonStyle
				>
					<XIcon
						round={false}
						size={36}
						iconFillColor="var(--color-foreground)"
						bgStyle={{fill: 'var(--color-bg-alt)'}}
					/>
				</TwitterShareButton>

				<TelegramShareButton
					url={shareUrl}
					htmlTitle="Share on Telegram"
					title={title}
				>
					<TelegramIcon
						round={false}
						size={36}
						iconFillColor="var(--color-foreground)"
						bgStyle={{fill: 'var(--color-bg-alt)'}}
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
						iconFillColor="var(--color-foreground)"
						bgStyle={{fill: 'var(--color-bg-alt)'}}
					/>
				</LinkedinShareButton>

				<EmailShareButton
					url={shareUrl}
					htmlTitle="Share by email"
					subject={title}
				>
					<EmailIcon
						round={false}
						size={36}
						iconFillColor="var(--color-foreground)"
						bgStyle={{fill: 'var(--color-bg-alt)'}}
					/>
				</EmailShareButton>
			</div>
		</div>
	)
}

export default ShareButtons;