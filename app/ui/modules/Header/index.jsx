import ColourMode from './DmSwitcher';

import { NameTitle } from '@/app/content/BodyContent';

function Header(){
    return(
        <header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__sitename">
						<span className='highlight'>{NameTitle.name}</span>
						<span>{NameTitle.title}</span>
					</h1>
				</div>
			</div>
			<ColourMode/>
        </header>
    )
}

export default Header;