import VennDiagram from './VennDiagram';
import SkillsList from './skillsList';
import Section2 from '@/app/ui/components/Section';
import { SkillsContent } from '@/app/content/BodyContent';

function SkillsAndAbilities(){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()

    return(
		<Section2 heading={title} moduleClassname='skillsAbilities' id="skills-and-abilities" layout='2col' noLineMobile>
			<SkillsList />
			<div className="skillsAbilities__bodyText">
				<VennDiagram />
				{content}
			</div>
		</Section2>
    )

}

export default SkillsAndAbilities;