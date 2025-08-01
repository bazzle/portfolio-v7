import {WelcomeContent} from '@/app/content/BodyContent';
import Section from '@/app/ui/components/Section';

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<section heading={WelcomeContent.title} layout="2col" moduleClassname="textBlock" noMinHeight>
			{content}
		</section>
	)
}

export default Welcome;