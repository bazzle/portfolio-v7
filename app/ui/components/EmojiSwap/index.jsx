'use client'

import { useState, useEffect } from 'react'

function EmojiSwap({ initial, after, delay = 1000 }) {
	const [swapped, setSwapped] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setSwapped(true), delay)
		return () => clearTimeout(timer)
	}, [delay])

	return <span>{swapped ? after : initial}</span>
}

export default EmojiSwap
