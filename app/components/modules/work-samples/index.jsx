import styles from './style.module.scss';
import BrowserMobile from './browser-mobile';
import BrowserDesktop from './browser-desktop';
import Section from '@/app/components/components/section';
import BgShapes from '@/app/components/components/bg-shapes';

function WorkSamples(){
    return(
		<Section>
			<div className={styles.work_samples}>
				<div className={styles.title_section}>
					<h2 className={styles.title_section_text}>Work samples coming soon!</h2>
				</div>
				<div className={styles.main}>
					<div className={styles.strip}>
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
							src="/assets/images/samples-nao.png"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples-ons.png"
							alt="profile"
						/>
						<BrowserMobile
							src="/assets/images/samples-satoshi-power.png"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples-bfi.png"
							alt="profile"
						/>
					</div>
					<div className={styles.strip}>
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
							src="/assets/images/samples-nao.png"
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
				</div>
				<BgShapes variant="3" />
			</div>
		</Section>
    )
}

export default WorkSamples;