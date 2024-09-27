import styles from './style.module.scss';
import SectionHead from "../../components/section-head";
import Clients from "../clients";

function Welcome(){
	return(
		<section id="welcome" className={styles.welcome}>
			<div className="container pt--deep pb--deep">
				<div className={styles.inner}>
					<div className={styles.col_1}>
						<SectionHead titleString="Welcome" separator />
					</div>
					<div className={styles.col_2}>
						<div className={styles.body_text}>
							<p>
								I have experience in many phases of development. Initial prototyping, user testing, design and build of the component library, scoping sessions with the team and ongoing iteration and maintenance.
							</p>
							<Clients/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome;