import VennDiagram from './VennDiagram';
import SkillsList from './SkillsList';
import Section from '@/app/ui/components/Section';
import { SkillsContent } from '@/app/content/BodyContent';
import styles from "./SkillsAndAbilities.module.scss";

function SkillsAndAbilities({id}){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()
	const optionalId = (id ? { id } : {})

    return(
		<Section 
		heading={title} 
		moduleClassname={styles.skillsAbilities} 
		layout='2col' 
		{...optionalId}
		noLineMobile
		>
			<div className={styles["skillsAbilities__bodyText"]}>
				<VennDiagram />
				{content}
			</div>
		</Section>
    )

}

export default SkillsAndAbilities;
