import ColourMode from './colour-mode';
import styles from './style.module.scss';

function Header(){
    return(
        <header className={styles.header}>
			<div className="container">
				<div className={styles.inner}>
					<h1 className={styles.sitename}>
						<span className='highlight'>Barry Richards</span>
						<span>Design Engineer</span>
					</h1>
					<div className={styles.line}>
						<hr />
						<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
					</div>
				</div>
			</div>
			<ColourMode/>
        </header>
    )
}

export default Header;