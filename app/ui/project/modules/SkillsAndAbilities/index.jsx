import VennDiagram from './VennDiagram'
import SkillsList from './SkillsList'
import Section from '@/app/ui/project/components/Section'
import { home, SkillsIntro } from '@/app/content/home'
import styles from './SkillsAndAbilities.module.scss'

function SkillsAndAbilities({ id, deepMbLine, line, deepMb }) {
	const title = home.skills.title
	const optionalId = id ? { id } : {}

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
		...(id ? { id } : {}),
	}

	return (
		<Section
			heading={title}
			moduleClassname={styles.skillsAbilities}
			layout="2col"
			{...optionalProps}
			noLineMobile
		>
			<div className={styles['skillsAbilities__bodyText']}>
				<VennDiagram />
				<SkillsIntro />
			</div>
		</Section>
	)
}

export default SkillsAndAbilities
