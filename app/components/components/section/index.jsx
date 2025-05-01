'use client';


import { useContext } from 'react';
import { colourThemeContext } from '@/app/context/colour-theme';

function Section({ children, id, line, noSpacing, noMinHeight }) {
	const { colourMode, modeSwitch } = useContext(colourThemeContext);

	const colorModeClassname = `colour--${colourMode}`

	const styleConfigString = [
		styles.section,
		line && styles.section_line,
		noSpacing && styles.section_no_spacing,
		noMinHeight && styles.section_no_min_height
	  ].filter(Boolean).join(' ');
	
	return (
		<section id={id} className={`${styleConfigString} ${colorModeClassname}`}>
			{children}
		</section>
  	);
}

export default Section;
