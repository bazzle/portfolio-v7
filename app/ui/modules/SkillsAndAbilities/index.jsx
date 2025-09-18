import VennDiagram from './VennDiagram';
import SkillsList from './SkillsList';
import Section from '@/app/ui/components/Section';
import { SkillsContent } from '@/app/content/BodyContent';
import styles from "./SkillsAndAbilities.module.scss";

function SkillsAndAbilities(){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()

    return(
		<Section heading={title} moduleClassname={styles.skillsAbilities} id="skills-and-abilities" layout='2col' noLineMobile>
			<SkillsList />
			<div className={styles["skillsAbilities__bodyText"]}>
				<VennDiagram />
				{content}
			</div>
		</Section>
    )

}

export default SkillsAndAbilities;
