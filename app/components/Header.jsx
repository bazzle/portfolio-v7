function Header(){
    return(
        <header className="header">
            <div className="container header__inner">
                <h1 className="header__site-name">
                    <span className="name">Barry Richards</span>
                    <span>Web Engineer</span>
                </h1>
				<div className="header__line">
					<hr />
					<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
				</div>
            </div>
        </header>
    )
}

export default Header;