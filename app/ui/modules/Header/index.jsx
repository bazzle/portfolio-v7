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
					<div className="header__line">
						<hr />
						<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
					</div>
				</div>
			</div>
			<ColourMode/>
        </header>
    )
}

export default Header;