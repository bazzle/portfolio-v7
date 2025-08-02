import { NameTitle } from '@/app/content/BodyContent';

function Header(){
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
        </header>
    )
}

export default Header;