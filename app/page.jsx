import Hero from "@/app/ui/modules/Hero/HeroMain";
import SkillsAndAbilities from "@/app/ui/modules/SkillsAndAbilities";
import WorkHistory from "@/app/ui/modules/WorkHistory";
import Themes from "@/app/ui/modules/Themes";
import TextStandout from "@/app/ui/modules/TextStandout";
import CardGrid from "@/app/ui/modules/CardGrid";
import StdContentTemplate from "./ui/modules/StdContentTemplate";
import Header from "@/app/ui/modules/Header";
import { metadata } from "./layout";
import ContactLinks from "@/app/ui/components/ContactLinks";

// content import
import {
	WelcomeContent,
	WhatNextContent,
	TextStandout1,
	TextStandout2,
	TextStandout3,
	GetInTouchContent,
	HomepageCards
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

				<CardGrid id="showcase-thought-pieces" title={HomepageCards.title} cards={HomepageCards.cards} line />

				<TextStandout id="things-i-think-about" textPrefix={TextStandout2.prefix} content={TextStandout2.content} line deepMbLine />

				<Themes id="themes" />

				<WorkHistory id="work-history" line />

				<StdContentTemplate id="whats-next" title={WhatNextContent.title} bodyContent={WhatNextContent.bodyContent()} />

				<TextStandout id="get-in-touch" content={TextStandout3.content} line>
					<ContactLinks />
				</TextStandout>
			</main>
		</>
	)
}

export default Home;
