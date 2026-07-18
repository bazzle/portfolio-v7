import Hero from '@/app/ui/project/modules/HeroHomepage'
import SkillsAndAbilities from '@/app/ui/project/modules/SkillsAndAbilities'
import WorkHistory from '@/app/ui/project/modules/WorkHistory'
import Themes from '@/app/ui/project/modules/Themes'
import TextStandout from '@/app/ui/project/modules/TextStandout'
import CardGrid from '@/app/ui/project/modules/CardGrid'
import StdContentTemplate from './ui/project/modules/StdContentTemplate'
import Header from '@/app/ui/style-library/components/Header'
import { metadata } from './layout'
import ContactLinks from '@/app/ui/project/components/ContactLinks'
import Buttons from '@/app/ui/style-library/components/Buttons'
import { headerTitle } from '@/app/content/site'
import FloatingNav from '@/app/ui/project/components/FloatingNav'
import WorkSamples from '@/app/ui/project/modules/WorkSamples'
import Icons from '@/style-library/misc/Icons'

// content import
import { home, WhoAmI } from '@/app/content/home'

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
			<Header
				headerTitle={headerTitle}
				headingLevel={1}
				navLinks={headerLinks}
			/>

			<FloatingNav sectionLinks={home.sectionLinks} />

			<main className="main">
				<Hero />
				<WorkSamples />

				<StdContentTemplate
					title={home.welcome.title}
					bodyContent={<WhoAmI />}
					id="who-am-i"
					deepMbLine
				/>

				<WorkHistory id="work-history" />

				<TextStandout
					content={home.standouts.whereISit.content}
					textPrefix={home.standouts.whereISit.prefix}
					id="what-am-i"
					line
					deepMbLine
				/>

				<SkillsAndAbilities id="skills-and-expertise" deepMbLine />

				<TextStandout
					id="things-i-think-about"
					textPrefix={home.standouts.thingsIThinkAbout.prefix}
					content={home.standouts.thingsIThinkAbout.content}
				/>

				<Themes id="themes" />

				<CardGrid
					id="showcase-thought-pieces"
					title={home.cards.title}
					cards={home.cards.items}
					line
				>
					<Buttons
						buttons={[
							{ link: 'thoughts/tag/showcase', linkText: 'View all Showcase' },
							{ link: 'thoughts/tag/thoughts', linkText: 'View all Thoughts' },
						]}
					/>
					<Buttons />
				</CardGrid>

				<TextStandout id="get-in-touch" content={home.standouts.thankyou.content} line>
					<ContactLinks />
				</TextStandout>

			</main>
		</>
	)
}

export default Home
