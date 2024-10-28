'use client'

import { createContext, useEffect, useState } from "react";

export const colourThemeContext = createContext();

export function ColourThemeProvider({children}){
	const [colourMode, setColourMode] = useState('dark');

	const applyLightMode = () => {
		document.body.classList.add('light-mode');
		localStorage.setItem('colourMode', 'light');
		setColourMode('light');
	}
	const applyDarkMode = () => {
		document.body.classList.remove('light-mode');
		localStorage.setItem('colourMode', 'dark');
		setColourMode('dark');
	}
	useEffect(() => {
		const storedMode = localStorage.getItem('colourMode');
		if(storedMode === 'light'){
			applyLightMode();
		} else {
			applyDarkMode();
		}
	}, []);

	const modeSwitch = () => colourMode === 'light' ? applyDarkMode() : applyLightMode();


	
	return (
		<colourThemeContext.Provider value={{colourMode, modeSwitch}}>
			{children}
		</colourThemeContext.Provider>
	)
}