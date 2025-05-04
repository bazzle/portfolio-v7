
import SectionHead from '@/app/ui/components/SectionHead';
import VennDiagram from './VennDiagram';
import SkillsList from './skillsList';
import Spacer from '@/app/ui/components/Spacer';
import Section from '@/app/ui/components/Section';
import { SkillsContent } from '@/app/content/bodyContent';

function SkillsAndAbilities(){

	const title = SkillsContent.title;
	const content = SkillsContent.bodyContent()

    return(
		<Section id="skills-and-abilities" noLineMobile>
			<div className="skillsAbilities">
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={title} separator/>
						</div>
						<div className="col-2">
							<SkillsList />
							<Spacer shallow noLine />
							<div className="inner-2col--50-50">
								<div className="skillsAbilities__bodyText">
									{content}
								</div>
								<div className="skillsAbilities__diagram">
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