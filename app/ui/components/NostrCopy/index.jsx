'use client'
import { IconCopy } from "@/app/ui/components/icons";
import { useState } from "react";

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
		return messageShow ? <span className="copyText__popupMessage">{message}</span> : null;
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
		<span className="copyText">
			<button aria-label="Copy {nostrId} to clipboard" onClick={HandleClick}>{nostrId}<IconCopy/></button>{messageContainer()}
		</span>
	)
}

export default NostrCopy;