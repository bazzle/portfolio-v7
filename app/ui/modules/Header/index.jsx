'use client';

import { NameTitle } from '@/app/content/BodyContent';
import FloatingNav from '../../components/FloatingNav';
import { usePathname } from 'next/navigation';

function Header(){
        const pathname = usePathname();

        return(
                <header className="header">
                        <div className="container">
                                <h1 className="header__sitename">
                                        <a href="/">
                                                <span className='highlight'>{NameTitle.name}</span>
                                                <span>{NameTitle.title}</span>
                                        </a>
                                </h1>
                        </div>
                        {pathname === '/' && <FloatingNav/>}
                </header>
        )
}

export default Header;

