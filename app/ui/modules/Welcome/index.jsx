import {WelcomeContent} from '@/app/content/BodyContent';
import Section2 from '@/app/ui/components/Section2';

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<Section2 heading={WelcomeContent.title} layout="2col" moduleClassname="textBlock" noMinHeight>
			{content}
		</Section2>
	)
}

export default Welcome;