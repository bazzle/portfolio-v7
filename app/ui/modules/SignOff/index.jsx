
import Section from '@/app/ui/components/Section';
import {SignoffContent} from '@/app/content/bodyContent';

function SignOff(){

	return(
		<Section id="sign-off" noMinHeight>
			<div className="signOff hide-print">
				<div className="container">
					<p>
						{SignoffContent.title}
					</p>
				</div>
			</div>
		</Section>
	)

}

export default SignOff;