import {WelcomeContent} from '@/app/content/BodyContent';
import Section from '@/app/ui/components/Section';
import textStandoutStyles from "../TextStandout/TextStandout.module.scss";

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<Section heading={WelcomeContent.title} layout="2col" moduleClassname={textStandoutStyles.textStandout} noMinHeight>
			{content}
		</Section>
	)
}

export default Welcome;
