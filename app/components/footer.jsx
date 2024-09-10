function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="container">
                <p className="footer__line text-mono-lower">&copy; Barry Richards {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer;