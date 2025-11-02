import BgShapes from "@/app/ui/components/BgShapes/index.jsx";
import Link from "next/link";
import styles from './Footer.module.scss';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={`${styles.footer} hide-print`}>
			<div className={styles.footer__content}>
				<div className="content-container">
					<p>Weeknotes, articles and thoughts</p>
					<p>
						<Link href="https://br-web.me">Read about me</Link> &nbsp;&mdash;&nbsp;
						<Link href="https://nosta.me/27a3d96de5945c3e9e522e63738ed289b1cfde8a7eca1fa31a953c3b23c87908">Nostr</Link> &nbsp;&mdash;&nbsp;
						<Link href="https://x.com/bazzle">X</Link>
					</p>
				</div>
			</div>
			<div className={styles.footer__background}>
				<BgShapes variant="4" />
			</div>
        </footer>
    )
}

export default Footer;
