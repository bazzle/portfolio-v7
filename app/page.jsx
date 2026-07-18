import Hero from '@/app/ui/project/modules/HeroHomepage'
import WorkHistory from '@/app/ui/project/modules/WorkHistory'
import TextStandout from '@/app/ui/project/modules/TextStandout'
import CardGrid from '@/app/ui/project/modules/CardGrid'
import Header from '@/app/ui/style-library/components/Header'
import { metadata } from './layout'
import ContactLinks from '@/app/ui/project/components/ContactLinks'
import Buttons from '@/app/ui/style-library/components/Buttons'
import { headerTitle } from '@/app/content/site'
import FloatingNav from '@/app/ui/project/components/FloatingNav'
import WorkSamples from '@/app/ui/project/modules/WorkSamples'
import Icons from '@/style-library/misc/Icons'

// content import
import { home } from '@/app/content/home'

function Home() {
	const title = metadata.title
	const description = metadata.description
	const headerLinks = [
		{
			'text': 'About me',
			'target': '/about-me',
		},
		{
			'text': 'Showcase and thoughts',
			'target': '/thoughts',
		},
	]

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

				<WorkHistory id="work-history" />

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
