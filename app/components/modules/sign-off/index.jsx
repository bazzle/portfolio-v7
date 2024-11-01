import styles from "./style.module.scss";
import Section from '@/app/components/components/section';

function SignOff(){

	return(
		<Section>
			<div className={styles.sign_off}>
				<div className="container">
					<p>
						Thankyou, have a great day!
					</p>
				</div>
			</div>
		</Section>
	)

}

export default SignOff;