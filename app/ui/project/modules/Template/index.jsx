import { home, WhoAmI } from '@/app/content/home'
import Section from '@/app/ui/project/components/Section'
import textStandoutStyles from '../TextStandout/TextStandout.module.scss'

function Welcome() {
	return (
		<Section
			heading={home.welcome.title}
			layout="2col"
			moduleClassname={textStandoutStyles.textStandout}
			noMinHeight
		>
			<WhoAmI />
		</Section>
	)
}

export default Welcome
