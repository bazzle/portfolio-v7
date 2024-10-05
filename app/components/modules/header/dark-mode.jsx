'use client';

import styles from './style.module.scss';

function DarkMode(){
	const handleClick = (evt) => {
		const toggleButton = evt.currentTarget
		let prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		let currentMode = localStorage.getItem('darkMode');

		if (currentMode === 'dark' || (currentMode === null && prefersDarkScheme)) {
			document.body.classList.add('dark-mode');
		}

		prefersDarkScheme.addEventListener('change', function(e){
			if (e.matches) {
				document.body.classList.add('dark-mode');
			} else {
				document.body.classList.remove('dark-mode');
			}
		});
		toggleButton.addEventListener('click', function() {
			let isDarkMode = document.body.classList.toggle('dark-mode');
			localStorage.setItem('darkMode', isDarkMode ? 'dark' : 'light');
		});
	}

	return(
		<button onClick={handleClick} aria-label="Switch to dark mode" className={styles.dm_switcher}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" className="fill-foreground" clipRule="evenodd" d="M21.96 18.6954C19.8047 21.8952 16.1482 24 12 24C5.37258 24 0 18.6274 0 12C0 10.1897 0.400868 8.473 1.11868 6.93387C1.25436 6.60815 1.41836 6.2892 1.61145 5.98019L1.61543 5.98267C3.69274 2.40542 7.56546 0 12 0C18.6274 0 24 5.37258 24 12C24 14.4292 23.2782 16.6898 22.0374 18.5791C22.0136 18.6189 21.9893 18.6587 21.9646 18.6983L21.96 18.6954ZM21.5671 11.1992C21.1602 6.27196 17.0323 2.4 12 2.4C8.16405 2.4 4.85357 4.64984 3.31615 7.90193C2.57926 9.73643 3.25116 11.9029 5.00737 13.0003C6.97645 14.2307 9.55591 13.6469 10.7704 11.7033C12.6897 8.63177 16.7512 7.71243 19.8405 9.64281C20.5228 10.0692 21.101 10.5991 21.5671 11.1992Z"/>
			</svg>
		</button>
	)
}

export default DarkMode