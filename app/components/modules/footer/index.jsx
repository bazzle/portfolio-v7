import styles from './style.module.scss';
import BackTop from '../../components/backtop';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
			<div className="container">
				<div className={styles.footer__line}>
					<p>
						&copy; Barry Richards – {currentYear}
					</p>
				</div>
			</div>
			<div className={styles.back_top}>
				<BackTop/>
			</div>
			<div role="presentation" className={styles.shapes}>
				<div></div>
				<div></div>
				<div></div>
			</div>
        </footer>
    )
}

export default Footer;