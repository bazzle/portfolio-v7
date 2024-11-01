import styles from './style.module.scss';
import SectionHead from '@/app/components/components/section-head';
import VennDiagram from './venn-diagram';
import SkillsList from './skills-list';
import Spacer from '@/app/components/components/spacer';
import Section from '@/app/components/components/section';

function SkillsAndAbilities(){

    return(
		<Section>
			<div className={styles.skills_abilities}>
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString="Skills and expertise" separator/>
						</div>
						<div className="col-2">
							<SkillsList />
						</div>
					</div>
				</div>
				<div className="container">
					<div className="inner-2col">
						<Spacer mobile/>
						<div className="col-1">
							<div className={styles.diagram}>
								<VennDiagram />
							</div>
						</div>
						<Spacer mobile/>
						<div className="col-2 {styles.main_section}">
							<div className={styles.body_text}>
								<p>
									My happy place is being creative, using my code editor like a metaphorical canvas. Utilising the wealth of freely available languages and libraries. I have extensive experience with fundamental front-end technologies including vanilla javascript, and I’m getting to grips with React. WordPress has been my most commonly used content management system. 
								</p>
								<p className="outset-text">
									I call myself a design engineer because I like to occupy the intersection of visual design and web development. I find the two disciplines equally captivating.
								</p>
								<p>
									I have experience in many phases of development, with varying levels of involvement within multi-disciplinary teams. I have drafted initial wireframes, built interactive prototypes, assisted user research sessions, developed mockups in Figma and collaborated with other developers in production build. Aswell as the less flashy things like responding to support requests, conducting accessibility audits and carrying out the necessary remediation work.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
    )

}

export default SkillsAndAbilities;