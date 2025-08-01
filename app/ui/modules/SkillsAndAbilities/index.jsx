import VennDiagram from './VennDiagram';
import SkillsList from './skillsList';
import Section from '@/app/ui/components/Section';
import { SkillsContent } from '@/app/content/BodyContent';

function SkillsAndAbilities(){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()

    return(
		<Section heading={title} moduleClassname='skillsAbilities' id="skills-and-abilities" layout='2col' noLineMobile>
			<SkillsList />
			<div className="skillsAbilities__bodyText">
				<VennDiagram />
				{content}
			</div>
		</Section>
    )

}

export default SkillsAndAbilities;