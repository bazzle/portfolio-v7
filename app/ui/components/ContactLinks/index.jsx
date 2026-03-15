"use client";

import { useEffect, useState } from "react";
import styles from "./ContactLinks.module.scss";
import { Icons } from "@/app/ui/misc/Icons";

export default function ContactLinks(){
	const emailAddress = "barry@br-web.me";
	const [didCopyEmail, setDidCopyEmail] = useState(false);

	useEffect(() => {
		if(!didCopyEmail){
			return;
		}

		const resetTimer = setTimeout(() => setDidCopyEmail(false), 1600);
		return () => clearTimeout(resetTimer);
	}, [didCopyEmail]);

	async function handleCopyEmail(){
		try{
			await navigator.clipboard.writeText(emailAddress);
			setDidCopyEmail(true);
		}
		catch(error){
			console.log("Failed to copy email address.", error);
		}
	}

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
				<button type="button" onClick={handleCopyEmail}>
					{didCopyEmail ? "email (copied)" : "email (copy)"}
				</button>
			</li>
		</ul>
	)
}
