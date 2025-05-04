'use client';


import { useContext } from 'react';
import { colourThemeContext } from '@/app/Context/ColourTheme';

function Section({ children, id, line, noSpacing, noMinHeight }) {
	const { colourMode, modeSwitch } = useContext(colourThemeContext);

	const colorModeClassname = `colour--${colourMode}`

	const styleConfigString = [
		"section",
		line && "section____line",
		noSpacing && "section____no_spacing",
		noMinHeight && "section____no_min_height"
	  ].filter(Boolean).join(' ');
	
	return (
		<section id={id} className={`${styleConfigString} ${colorModeClassname}`}>
			{children}
		</section>
  	);
}

export default Section;
