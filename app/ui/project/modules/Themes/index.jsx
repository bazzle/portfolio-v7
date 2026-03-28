import Section from '@/app/ui/project/components/Section'
import styles from './Themes.module.scss'
import ThemesCarousel from '@/app/ui/project/components/ThemesCarousel'

function Themes({ id }) {
	const optionalId = id ? { id } : {}

	return (
		<Section
			{...optionalId}
			moduleClassname={styles.themes}
			headingTop
			headingHidden
			noLine
		>
			<ThemesCarousel />
		</Section>
	)
}

export default Themes
