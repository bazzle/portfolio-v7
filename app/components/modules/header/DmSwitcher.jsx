'use client';

import { useState, useEffect, useContext } from 'react';

import { colourThemeContext } from '@/app/context/colour-theme';

function ColourMode() {
	const { colourMode, modeSwitch } = useContext(colourThemeContext);
	const otherMode = colourMode === 'light' ? 'dark' : 'light';
	return (
		<button onClick={modeSwitch} title={`Switch to ${otherMode} mode`} aria-label={`Switch to ${otherMode} mode`} className="header__dmSwitcher">

			<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path className="fill-foreground" fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12.0002 22C17.5229 22 22 18.0751 22 12C22 5.92487 17.5229 2 12.0002 2L12 12L12.0002 22Z"/>
			</svg>


		</button>
	);
}

export default ColourMode;
