import styles from "./style.module.scss";
import Section from '@/app/components/components/section';
import {SignoffContent} from '@/app/content/body-content';
import Spacer from "@/app/components/components/spacer";

function SignOff(){

	return(
		<Section>
			<div className={styles.sign_off}>
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