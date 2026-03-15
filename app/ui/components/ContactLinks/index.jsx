import styles from "./ContactLinks.module.scss";
import { Icons } from "@/app/ui/misc/Icons";

export default function ContactLinks(){
	return(
		<ul className={styles.contactLinks}>
			<li>
				{Icons.x}
				<a href="https://x.com/bazzle">X</a>
			</li>
			<li>
				{Icons.nostr}
				<a href="https://njump.me/bazzle@br-web.me">nostr</a>
			</li>
			<li>
				{Icons.linkedin}
				<a href="https://www.linkedin.com/in/br-web/">LinkedIn</a>
			</li>
			<li>
				{Icons.email}
				<a href="#">email (copy)</a>
			</li>
		</ul>
	)
}
