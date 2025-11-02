'use client'
import { IconCopy } from "@/app/ui/components/Icons";
import { useState } from "react";
import styles from "./NostrCopy.module.scss";

function NostrCopy(){
	const nostrId = 'bazzle@br-web.me'
	const successMessage = 'Copied'
	const failMessage = 'Copy failed'
	let message
	const [messageShow, setMessageShow] = useState(false)
	const [status, setStatus] = useState()


	const messageContainer = () => {
		if (status === 'fail') {
			message = 'Copy to clipboard failed'
		} else {
			message = 'Copied!'
		}
		return messageShow ? <span className={styles["copyText__popupMessage"]}>{message}</span> : null;
	}

	const HandleClick = ()=>{
		navigator.clipboard.writeText(nostrId)
		.then(()=>{
			setMessageShow(true);
			setStatus('success');
			setTimeout(()=>{
				setMessageShow(false);
			},700)
		})
		.catch(err => {
			throw new Error('Copy failed');
			setMessageShow(true);
			setStatus('fail');
			message = 'Copy to clipboard failed'
			setTimeout(()=>{
				setMessageShow(false);
			},700)
		})
	}

	return (
		<span className={styles.copyText}>
			Find me on nostr: <button title="Copy nostr ID to clipboard" aria-label="Copy {nostrId} to clipboard" onClick={HandleClick}>{nostrId}<IconCopy/></button>{messageContainer()}
		</span>
	)
}

export default NostrCopy;
