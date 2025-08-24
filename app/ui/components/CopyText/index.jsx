'use client'
import { IconCopy } from "@/app/ui/components/icons";
import { useEffect } from "react";
import { useState } from "react";

function CopyText(){
	const nostrId = 'bazzle@br-web.me';
	const message = 'Copied'
	const [messageShow, setMessageShow] = useState(false);

	const HandleClick = ()=>{
		navigator.clipboard.writeText(nostrId).then(()=>{
			setMessageShow(true);
			setTimeout(()=>{
				setMessageShow(false);
			},700)
		})
	}

	const messageContainer = () => {
		return messageShow ? <span className="copyText__popupMessage">{message}</span> : null;
	}

	return (
		<span className="copyText">
			<span>Find me on Nostr:</span> <button aria-label="Copy nostr ID to clipboard" onClick={HandleClick}>{nostrId}<IconCopy/></button>{messageContainer()}
		</span>
	)
}

export default CopyText;