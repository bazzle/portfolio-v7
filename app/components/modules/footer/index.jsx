import styles from './style.module.scss';

function Footer(){

    const currentYear = new Date().getFullYear();

    return(
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.footer__line}>&copy; Barry Richards –  {currentYear}</p>
            </div>
        </footer>
    )
}

export default Footer;