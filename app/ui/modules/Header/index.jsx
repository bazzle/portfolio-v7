'use client';

import { NameTitle } from '@/app/content/BodyContent';
import FloatingNav from '../../components/FloatingNav';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header(){
        const pathname = usePathname();

        return(
                <header className="header">
                        <div className="container">
							<h1 className="header__sitename">
								<Link href="/">
									<span className='highlight'>{NameTitle.name}</span><span>{NameTitle.title}</span>
								</Link>
							</h1>
                        </div>
                        {pathname === '/' && <FloatingNav/>}
                </header>
        )
}

export default Header;

