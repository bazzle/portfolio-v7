'use client';

import { useEffect, useState } from 'react';

const handleClick = () => {
        window.scrollTo({
                top: 0,
                behavior: 'auto'
        });
};

function FloatingNav(){
        const [sections, setSections] = useState([]);

        useEffect(() => {
                const sectionElements = Array.from(document.querySelectorAll('section[id]'));
                const data = sectionElements.map(section => {
                        const heading = section.querySelector('h2');
                        return {
                                id: section.id,
                                label: heading ? heading.textContent.trim() : section.id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
                        };
                });
                setSections(data);

                const observer = new IntersectionObserver(entries => {
                        entries.forEach(entry => {
                                const link = document.querySelector(`.floatingNav__nav a[href="#${entry.target.id}"]`);
                                if (link){
                                        entry.isIntersecting ? link.classList.add('active') : link.classList.remove('active');
                                }
                        });
                }, { threshold: 0.5 });

                sectionElements.forEach(section => observer.observe(section));

                return () => {
                        sectionElements.forEach(section => observer.unobserve(section));
                        observer.disconnect();
                };
        }, []);

        return(
                <div className="floatingNav">
                        <nav className="floatingNav__nav">
                                {sections.map(({id, label}) => (
                                        <a key={id} href={`#${id}`}>{label}</a>
                                ))}
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
