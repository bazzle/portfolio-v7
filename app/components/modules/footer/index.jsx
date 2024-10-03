import styles from './style.module.scss';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
			<div className={styles.footer__inner}>
				<div className="container">
					<div className={styles.footer__line}>
						<p>
							&copy; Barry Richards –  {currentYear}
						</p>
					</div>
				</div>
			</div>
        </footer>
    )
}

export default Footer;