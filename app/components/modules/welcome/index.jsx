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
								Throughout my career of over a decade of delivering web projects – working with some great people, keeping an open mind and constantly learning and iterating – I believe I have forged an optimal approach to deliver fantastic web projects and a set of principles that I stand by as much as I can.
							</p>
							<p>
								My work within the public sector for Helpful Digital and dxw has instilled in me strong appreciation for accessibility. One thing I’ve carried with me is the notion that accessibility standards aren’t exclusively for disabled people. In catering to disabilites we’re making the web better for everyone.
							</p>
							<p>
								When I design a website, I think of accessibility as a baseline. From there, I seek to bring understated creative flair, using typography, hierarchy, animation and colour. I’m experienced at working with clients to help unlock that missing piece, that elusive “pop” that their website needs. I’m a design minimalist, I believe small changes make big differences. I take a pragmatic approach and I’m sympathetic to client and user needs.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome;