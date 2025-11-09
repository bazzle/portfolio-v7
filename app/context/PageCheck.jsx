'use client'
import { createContext, useEffect } from "react";
import { usePathname } from 'next/navigation'

export const pageCheckContext = createContext();

export function PageCheckProvider({children}){

	const currentPath = usePathname();
	let currentPage = 'page';
	
	useEffect(()=>{
		if (currentPath === '/'){
			currentPage = 'home'
		} else if (currentPath.includes('thoughts')){
			if (currentPath.includes('tag')){
				currentPage = 'tag'
			} else {
				currentPage = 'single'
			}
		} else {
			currentPage = 'page'
		}
		document.body.classList.add(currentPage);
	}, [currentPath])

	return(
		<pageCheckContext.Provider value={{ currentPage }}>
			{children}
		</pageCheckContext.Provider>
	)
}