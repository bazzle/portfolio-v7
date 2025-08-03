import Hero from "@/app/ui/modules/Hero";
import SkillsAndAbilities from "@/app/ui/modules/SkillsAndAbilities";
import WorkHistory from "@/app/ui/modules/WorkHistory";
import WorkSamples from "@/app/ui/modules/WorkSamples";
import Themes from "@/app/ui/modules/Themes";
import TextBlock from "@/app/ui/modules/TextBlock";
import SignOff from "@/app/ui/modules/SignOff";
import Cards from "@/app/ui/modules/Cards";
import ContentSection from "./ui/modules/ContentSection";
// content import
import {WelcomeContent, WhatNextContent} from '@/app/content/BodyContent';


function Home(){
	return(
		<main>
			<Hero/>
			<ContentSection
				title={WelcomeContent.title}
				bodyContent={WelcomeContent.bodyContent()}
			/>
			<TextBlock itemIndex={0}/>
			<SkillsAndAbilities/>
			<TextBlock itemIndex={1}/>
			<Themes/>
			<WorkSamples/>
			<WorkHistory/>
			<ContentSection
				title={WhatNextContent.title}
				bodyContent={WhatNextContent.bodyContent()}
				deepMb
			/>
			<Cards/>
			<SignOff/>
		</main>
	)
}

export default Home;