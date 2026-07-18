import SkillsAndAbilities from '@/app/ui/project/modules/SkillsAndAbilities'
import Themes from '@/app/ui/project/modules/Themes'
import TextStandout from '@/app/ui/project/modules/TextStandout'
import StdContentTemplate from '@/app/ui/project/modules/StdContentTemplate'
import Header from '@/app/ui/style-library/components/Header'
import FloatingNav from '@/app/ui/project/components/FloatingNav'
import { headerTitle } from '@/app/content/site'

// content import
import { home, aboutSectionLinks, WhoAmI } from '@/app/content/home'

export const metadata = {
	title: 'Barry Richards Design Engineer - About me',
}

function AboutMe() {
	const headerLinks = [
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

			<FloatingNav sectionLinks={aboutSectionLinks} />

			<main className="main">
				<StdContentTemplate
					title={home.welcome.title}
					bodyContent={<WhoAmI />}
					id="who-am-i"
					deepMbLine
				/>

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
			</main>
		</>
	)
}

export default AboutMe
