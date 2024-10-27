'use client'

import { createContext, useState } from "react";

export const colorThemeContext = createContext();

export function ColorThemeProvider({children}){
	const [colorMode, colorModeSetter] = useState('dark');
	
	return (
		<colorThemeContext.Provider value={colorMode}>
			{children}
		</colorThemeContext.Provider>
	)
}