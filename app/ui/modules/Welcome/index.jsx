import SectionHead from '@/app/ui/components/SectionHead';
import Section from '@/app/ui/components/Section';
import {WelcomeContent} from '@/app/content/BodyContent';

function Welcome(){

	const title = WelcomeContent.title;
	const content = WelcomeContent.bodyContent()

	return(
		<Section id="welcome" noMinHeight>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString={title} separator />
					</div>
					<div className="col-2">
						{content}
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Welcome;