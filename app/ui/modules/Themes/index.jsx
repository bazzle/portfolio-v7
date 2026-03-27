import Section from '@/app/ui/components/Section'
import { ThemesContent } from '@/app/content/BodyContent'
import styles from './Themes.module.scss'
import ThemesCarousel from '@/app/ui/components/ThemesCarousel'

function Themes({ id }) {
	const optionalId = id ? { id } : {}

	return (
		<Section
			{...optionalId}
			heading={ThemesContent.title}
			moduleClassname={styles.themes}
			layout="2col"
			headingTop
			headingHidden
			noLine
		>
			<ThemesCarousel />
		</Section>
	)
}

export default Themes
