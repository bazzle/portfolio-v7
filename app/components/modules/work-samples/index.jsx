import styles from './style.module.scss';
import BrowserMobile from './browser-mobile';
import BrowserDesktop from './browser-desktop';
import Section from '@/app/components/components/section';
import BgShapes from '@/app/components/components/bg-shapes';
import {workSamplesContent} from '@/app/content/body-content';

function WorkSamples(){
    return(
		<Section>
			<div className={styles.work_samples}>
				<div className={styles.title_section}>
					<h2 className={styles.title_section_text}>{workSamplesContent.title}</h2>
				</div>
				<div className={styles.main}>
					<div className={styles.strip}>
						<BrowserDesktop
							src="/assets/images/samples/nao2-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/chevening-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/ua-dt.jpg"
							alt="profile"
						/>
						<BrowserMobile
							src="/assets/images/samples/bdo-mob.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/bdo-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/chevening2-dt.jpg"
							alt="profile"
						/>
						<BrowserMobile
							src="/assets/images/samples/nao2-mob.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/bfi-dt.jpg"
							alt="profile"
						/>
					</div>
					<div className={styles.strip}>
						<BrowserDesktop
							src="/assets/images/samples/chevening-dt.jpg"
							alt="profile"
						/>
						<BrowserMobile
							src="/assets/images/samples/ua-mob.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/nao2-dt.jpg"
							alt="profile"
						/>
						<BrowserMobile
							src="/assets/images/samples/nao-mob.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/bfi-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/ons-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/nao-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/ua2-dt.jpg"
							alt="profile"
						/>
						<BrowserDesktop
							src="/assets/images/samples/nao3-dt.jpg"
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