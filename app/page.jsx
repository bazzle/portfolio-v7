import Hero from "@/app/ui/modules/Hero";
import SkillsAndAbilities from "@/app/ui/modules/SkillsAndAbilities";
import WorkHistory from "@/app/ui/modules/WorkHistory";
import WorkSamples from "@/app/ui/modules/WorkSamples";
import Themes from "@/app/ui/modules/Themes";
import TextStandout from "@/app/ui/modules/TextStandout";
import Cards from "@/app/ui/modules/Cards";
import StdContentTemplate from "./ui/modules/StdContentTemplate";
import Header from "@/app/ui/modules/Header";
// content import
import {
	WelcomeContent,
	WhatNextContent,
	TextStandout1,
	TextStandout2,
	TextStandout3,
	GetInTouchContent
} from '@/app/content/BodyContent';


function Home(){
	return(
		<>
			<Header location="portfolio" />
			<main className="main">
				<Hero/>
				<StdContentTemplate
					title={WelcomeContent.title}
					bodyContent={WelcomeContent.bodyContent()}
				/>
				<TextStandout content={TextStandout1} line deepMbLine/>
				<SkillsAndAbilities/>
				<TextStandout content={TextStandout2} line deepMbLine/>
				<Themes/>
				<WorkSamples/>
				<WorkHistory/>
				<StdContentTemplate
					title={WhatNextContent.title}
					bodyContent={WhatNextContent.bodyContent()}
				/>
				<Cards/>
				<StdContentTemplate
					id="get-in-touch"
					title={GetInTouchContent.title}
					bodyContent={GetInTouchContent.bodyContent()}
					deepMbLine
				/>
				<TextStandout content={TextStandout3}/>
			</main>
		</>
	)
}

export default Home;