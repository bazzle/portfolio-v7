import BgShapes from '@/app/ui/components/BgShapes';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer hide-print">
			<div className="container">
				<div className="footer__line">
					<p>
						&copy; Barry Richards – {currentYear}
					</p>
				</div>
			</div>
			<BgShapes variant="4" />
        </footer>
    )
}

export default Footer;