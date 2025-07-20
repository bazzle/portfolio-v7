'use client'

import { createContext, useEffect, useState } from "react";

export const colourThemeContext = createContext();

export function ColourThemeProvider({children}){
	const [colourMode, setColourMode] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const applyLightMode = () => {
		document.body.classList.add('light-mode');
		document.body.classList.remove('dark-mode');
		localStorage.setItem('colourMode', 'light');
		setColourMode('light');
		setIsLoading(false);
	}
	const applyDarkMode = () => {
		document.body.classList.add('dark-mode');
		document.body.classList.remove('light-mode');
		localStorage.setItem('colourMode', 'dark');
		setColourMode('dark');
		setIsLoading(false);
	}
	useEffect(() => {
		const storedMode = localStorage.getItem('colourMode');
		const osModeChecker = window.matchMedia('(prefers-color-scheme: dark)'); 


		if (storedMode){
			if(storedMode === 'light'){
				applyLightMode();
			} else {
				applyDarkMode();
			}
		} else {
			applyDarkMode();
		}

		osModeChecker.addEventListener('change',(e) => {
			if(e.matches){
				applyDarkMode();
			} else {
				applyLightMode();
			}
		})

	}, []);

	const modeSwitch = () => colourMode === 'light' ? applyDarkMode() : applyLightMode();


	
	return (
		<colourThemeContext.Provider value={{colourMode, modeSwitch}}>
			{!isLoading && children}
		</colourThemeContext.Provider>
	)
}