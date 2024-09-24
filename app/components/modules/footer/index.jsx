import styles from './style.module.scss';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__line}>
					<p>
						&copy; Barry Richards –  {currentYear}
					</p>
				</div>
            </div>
        </footer>
    )
}

export default Footer;