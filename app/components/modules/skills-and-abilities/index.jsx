import styles from './style.module.scss';
import SectionHead from '@/app/components/components/section-head';
import VennDiagram from './venn-diagram';
import SkillsList from './skills-list';
import Spacer from '@/app/components/components/spacer';
import Section from '@/app/components/components/section';
import { SkillsContent } from '@/app/content/body-content';

function SkillsAndAbilities(){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()

    return(
		<Section  id="skills-and-abilities" noLineMobile>
			<div className={styles.skills_abilities}>
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={title} separator/>
						</div>
						<div className="col-2">
							<SkillsList />
							<div className="inner-2col--50-50">
								<div className={styles.body_text}>
									<Spacer shallow noMobile />
									{content}
								</div>
								<div className={styles.diagram}>
									<Spacer shallow noMobile noLine />
									<VennDiagram />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
    )

}

export default SkillsAndAbilities;