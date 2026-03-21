'use client'

import { createContext, useEffect, useState } from 'react'

export const colourThemeContext = createContext()

export function ColourThemeProvider({ children }) {
	const [colourMode, setColourMode] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const applyLightMode = () => {
		document.body.classList.add('light-mode')
		document.body.classList.remove('dark-mode')
		setColourMode('light')
		setIsLoading(false)
	}
	const applyDarkMode = () => {
		document.body.classList.add('dark-mode')
		document.body.classList.remove('light-mode')
		setColourMode('dark')
		setIsLoading(false)
	}
	const applyMode = (e) => {
		if (e.matches) {
			applyLightMode()
		} else {
			applyDarkMode()
		}
	}
	useEffect(() => {
		const osModeChecker = window.matchMedia('(prefers-color-scheme: light)')
		console.log(osModeChecker)

		osModeChecker.addEventListener('change', (e) => {
			applyMode(e)
		})
		applyMode(osModeChecker)
	}, [])

	return (
		<colourThemeContext.Provider value={{ colourMode }}>
			{!isLoading && children}
		</colourThemeContext.Provider>
	)
}
