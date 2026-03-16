import styles from "./ContactLinks.module.scss";
import { Icons } from "@/app/ui/misc/Icons";
import CopyEmail from "./CopyEmail";

export default function ContactLinks(){

	return(
		<ul className={styles.contactLinks}>
			<li className={styles.contactLinks__item}>
				<a href="https://x.com/bazzle">
					{Icons.x}
					<span>X</span>
				</a>
			</li>
			<li className={styles.contactLinks__item}>
				<a href="https://njump.me/bazzle@br-web.me">
					{Icons.nostr}
					<span>nostr</span>
				</a>
			</li>
			<li className={styles.contactLinks__item}>
				<a href="https://www.linkedin.com/in/br-web/">
				{Icons.linkedin}
				<span>LinkedIn</span>
				</a>
			</li>
			<li className={styles.contactLinks__item____fullWidth}>
				<CopyEmail text="Email (copy address to clipboard)" />
			</li>
		</ul>
	)
}
