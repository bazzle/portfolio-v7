'use client'
import { createContext, useEffect } from "react";
import { usePathname } from 'next/navigation'

export const HomepageContext = createContext();

export function HomepageCheckProvider({children}){
	const currentPath = usePathname();
	const isHome = currentPath === '/'
	
	useEffect(()=>{
		document.body.classList.toggle('home', isHome);
	}, [isHome])

	return(
		<HomepageContext.Provider value={{ isHome }}>
			{children}
		</HomepageContext.Provider>
	)
}