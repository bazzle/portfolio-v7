import Hero from '@/app/ui/project/modules/HeroHomepage'
import SkillsAndAbilities from '@/app/ui/project/modules/SkillsAndAbilities'
import WorkHistory from '@/app/ui/project/modules/WorkHistory'
import Themes from '@/app/ui/project/modules/Themes'
import TextStandout from '@/app/ui/project/modules/TextStandout'
import CardGrid from '@/app/ui/project/modules/CardGrid'
import StdContentTemplate from './ui/project/modules/StdContentTemplate'
import Header from '@/app/ui/project/modules/Header'
import { metadata } from './layout'
import ContactLinks from '@/app/ui/project/components/ContactLinks'
import CallToAction from '@/app/ui/project/components/CallToAction'

// content import
import {
	WelcomeContent,
	WhatNextContent,
	TextStandout1,
	TextStandout2,
	TextStandout3,
	HomepageCards,
} from '@/app/content/BodyContent'

function Home() {
	const title = metadata.title
	const description = metadata.description
	const headerLinks = [{
		'text': 'Showcase and thoughts',
		'target': '/thoughts',
		'arrowDirection': 'forward',
	}]
	return (
		<>
			<Header navLinks={headerLinks} />
			<main className="main">
				<Hero />

				<StdContentTemplate
					title={WelcomeContent.title}
					bodyContent={WelcomeContent.bodyContent()}
					id="who-am-i"
				/>

				<TextStandout
					content={TextStandout1.content}
					textPrefix={TextStandout1.prefix}
					id="what-am-i"
					line
					deepMbLine
				/>

				<SkillsAndAbilities id="skills-and-expertise" />

				<CardGrid
					id="showcase-thought-pieces"
					title={HomepageCards.title}
					cards={HomepageCards.cards}
					line
				>
					<CallToAction
						buttons={[
							{ link: 'thoughts/tag/showcase', linkText: 'View all Showcase' },
							{ link: 'thoughts/tag/thoughts', linkText: 'View all Thoughts' },
						]}
					/>
					<CallToAction />
				</CardGrid>

				<TextStandout
					id="things-i-think-about"
					textPrefix={TextStandout2.prefix}
					content={TextStandout2.content}
					line
				/>

				<Themes id="themes" />

				<WorkHistory id="work-history" line />

				<StdContentTemplate
					id="whats-next"
					title={WhatNextContent.title}
					bodyContent={WhatNextContent.bodyContent()}
				/>

				<TextStandout id="get-in-touch" content={TextStandout3.content} line>
					<ContactLinks />
				</TextStandout>
			</main>
		</>
	)
}

export default Home
