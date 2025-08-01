
import Section from '@/app/ui/components/Section';
import {SignoffContent} from '@/app/content/BodyContent';

function SignOff(){

	return(
		<Section moduleClassname="signOff" heading={SignoffContent.title} id="welcome" noMinHeight>
			<div className="signOff hide-print">
				<div className="container">
					<p className="signOff__text">
						{SignoffContent.title}
					</p>
				</div>
			</div>
		</Section>
	)

}

export default SignOff;