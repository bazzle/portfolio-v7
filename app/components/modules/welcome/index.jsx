import styles from './style.module.scss';
import SectionHead from "../../components/section-head";

function Welcome(){
	return(
		<section id="welcome" className={styles.welcome}>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString="Welcome" separator />
					</div>
					<div className="col-2">
						<div className={styles.body_text}>
							<p>
								From the baseline of accessibility I seek to bring understated creative flair, using typography, hierarchy, animation and colour. I’m experienced at working with clients to help unlock that missing piece, that elusive “pop” that their website needs.
							</p>
							<p>
								I’m a design minimalist, I believe small changes make big differences. I take a pragmatic approach and I’m sympathetic to client and user needs. 
							</p>
							<p>
								I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating.
							</p>
							<p>
								I have experience in many phases of development. Initial prototyping, user testing, design and build of the component library, scoping sessions with the team and ongoing iteration and maintenance.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome;