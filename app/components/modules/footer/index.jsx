import styles from './style.module.scss';
import BackTop from './backtop';
import BgShapes from '@/app/components/components/bg-shapes';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={`${styles.footer} hide-print`}>
			<div className="container">
				<div className={styles.footer__line}>
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