import styles from './style.module.scss';
import SectionHead from '@/app/components/components/section-head';
import Section from '@/app/components/components/section';
import {WelcomeContent} from '@/app/content/body-content';
import Spacer from '@/app/components/components/spacer';

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<Section id="welcome" noLine noSpacerPrint>
			<Spacer noLine />
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString={title} separator />
					</div>
					<div className="col-2">
						<div className={styles.body_text}>
							{content}
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Welcome;