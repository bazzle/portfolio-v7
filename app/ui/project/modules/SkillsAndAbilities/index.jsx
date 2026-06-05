import VennDiagram from './VennDiagram'
import SkillsList from './SkillsList'
import Section from '@/app/ui/project/components/Section'
import { SkillsContent } from '@/app/content/BodyContent'
import styles from './SkillsAndAbilities.module.scss'

function SkillsAndAbilities({ id, deepMbLine, line, deepMb }) {
	const title = SkillsContent.title
	const content = SkillsContent.bodyContent()
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
				{content}
			</div>
		</Section>
	)
}

export default SkillsAndAbilities
