'use client';

const handleClick = () => {
	window.scrollTo({
		top: 0,
		behaviour: 'auto'
	});
}

function FloatingNav(){
	return(
		<div className="floatingNav">
			<nav className="floatingNav__nav">
				<a href="#who-i-am-and-what-i-do">Who I am and what I do</a>
				<a href="#skills-and-abilities">Skills and expertise</a>
				<a href="#things-i-think-about">Things I think about</a>
			</nav>
			<button aria-label='Back to top' className="floatingNav__backTop" onClick={handleClick}>
				<svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className="fill-bg" d="M3 0.5H30C31.3807 0.5 32.5 1.61929 32.5 3V32.5H0.5V3C0.5 1.61929 1.61929 0.5 3 0.5Z"/>
					<path className="stroke-accent" strokeWidth="1" d="M23.5 19.5002L16.5 13.5002L9.50024 19.4998"/>
				</svg>
			</button>
		</div>
	)
}

export default FloatingNav;