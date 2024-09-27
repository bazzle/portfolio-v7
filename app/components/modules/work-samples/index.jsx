import styles from './style.module.scss';
import BrowserMobile from './browser-mobile';
import BrowserDesktop from './browser-desktop';
function WorkSamples(){
    return(
        <section className={styles.work_samples}>
			<div className={styles.title_overlay}>
				<h2 className={styles.title_overlay_text}>Work Samples coming soon</h2>
			</div>
            <div className={styles.inner}>
				<BrowserDesktop
					src="/assets/images/samples-nao.png"
					alt="profile"
				/>
				<BrowserDesktop
					src="/assets/images/samples-bfi.png"
					alt="profile"
				/>
				<BrowserMobile
					src="/assets/images/samples-satoshi-power.png"
					alt="profile"
				/>
				<BrowserDesktop
					src="/assets/images/samples-ons.png"
					alt="profile"
				/>
				<BrowserDesktop
					src="/assets/images/samples-bfi.png"
					alt="profile"
				/>
				<BrowserDesktop
					src="/assets/images/samples-ons.png"
					alt="profile"
				/>
            </div>
        </section>
    )
}

export default WorkSamples;