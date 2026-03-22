'use client'

import { ThemeProvider } from 'next-themes'

export default function AppThemeProvider({ children }) {
	return (
		// Set defaultTheme to "system" when I'm ready for light-mode
		<ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
			{children}
		</ThemeProvider>
	)
}
