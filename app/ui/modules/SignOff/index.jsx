
import Section2 from '@/app/ui/components/Section2';
import {SignoffContent} from '@/app/content/BodyContent';

function SignOff(){

	return(
		<Section2 moduleClassname="signOff" heading={SignoffContent.title} id="welcome" noMinHeight>
			<div className="signOff hide-print">
				<div className="container">
					<p className="signOff__text">
						{SignoffContent.title}
					</p>
				</div>
			</div>
		</Section2>
	)

}

export default SignOff;