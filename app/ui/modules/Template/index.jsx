import {WelcomeContent} from '@/app/content/BodyContent';
import Section from '@/app/ui/components/Section';

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<Section heading={WelcomeContent.title} layout="2col" moduleClassname="TextStandout" noMinHeight>
			{content}
		</Section>
	)
}

export default Welcome;