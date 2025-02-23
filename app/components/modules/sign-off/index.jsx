import styles from "./style.module.scss";
import Section from '@/app/components/components/section';
import {SignoffContent} from '@/app/content/body-content';
import Spacer from "../../components/spacer";

function SignOff(){

	return(
		<Section id="sign-off" noLine shallow>
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