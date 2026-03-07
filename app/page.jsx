import Hero from "@/app/ui/modules/Hero/HeroMain";
import SkillsAndAbilities from "@/app/ui/modules/SkillsAndAbilities";
import WorkHistory from "@/app/ui/modules/WorkHistory";
import WorkSamples from "@/app/ui/modules/WorkSamples";
import Themes from "@/app/ui/modules/Themes";
import TextStandout from "@/app/ui/modules/TextStandout";
import CardGrid from "@/app/ui/modules/CardGrid";
import StdContentTemplate from "./ui/modules/StdContentTemplate";
import Header from "@/app/ui/modules/Header";
import ShareButtons from "@/app/ui/components/blog/ShareButtons";
import { metadata } from "./layout";

// content import
import {
	WelcomeContent,
	WhatNextContent,
	TextStandout1,
	TextStandout2,
	TextStandout3,
	GetInTouchContent,
	WorkingOnCards,
	WorkSamplesCards

} from '@/app/content/BodyContent';


function Home(){
	const title = metadata.title
	const description = metadata.description
	return(
		<>
			<Header location="portfolio" />
			<main className="main">
				<Hero/>

				<StdContentTemplate title={WelcomeContent.title} bodyContent={WelcomeContent.bodyContent()} id="who-am-i" />

				<TextStandout content={TextStandout1.content} textPrefix={TextStandout1.prefix} id="what-am-i" line deepMbLine />

				<SkillsAndAbilities id="skills-and-expertise" />

				<CardGrid id="currently-feed" content={WorkingOnCards} line />

				<TextStandout id="about-me" content={TextStandout2.content} line deepMbLine />

				<Themes id="things-i-think-about" />

				<CardGrid id="work-samples" content={WorkSamplesCards} />

				<WorkHistory id="work-history" line />

				<StdContentTemplate id="whats-next" title={WhatNextContent.title} bodyContent={WhatNextContent.bodyContent()} />

				<StdContentTemplate id="get-in-touch" title={GetInTouchContent.title} bodyContent={GetInTouchContent.bodyContent()} deepMbLine line />

				<TextStandout id="sign-off" content={TextStandout3.content} >
					<ShareButtons title={title} excerpt={description} preText={"Share this page"} />
				</TextStandout>
			</main>
		</>
	)
}

export default Home;