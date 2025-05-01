
import Section from '@/app/components/components/section';
import {SignoffContent} from '@/app/content/body-content';

function SignOff(){

	return(
		<Section id="sign-off" noMinHeight>
			<div className={`${styles.sign_off} hide-print`}>
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