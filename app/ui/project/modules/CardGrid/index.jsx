'use client'
import styles from './CardGrid.module.scss'
import Section from '@/app/ui/project/components/Section'
import Card from '@/style-library/components/Card'
import CallToAction from '@/app/ui/style-library/components/CallToAction'

export default function CardGrid({
	line,
	deepMb,
	deepMbLine,
	id,
	title,
	cards,
	children,
}) {
	if (!cards) return

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
		...(id ? { id } : {}),
	}

	return (
		<Section heading={title} headingTop {...optionalProps} layout="extended">
			<div className={styles.cardGrid}>
				{cards.map((item, index) => (
					<div className={styles.cardGrid__item} key={index}>
						<Card
							imageSrc={item.imageSrc}
							imageAlt={item.imageAlt}
							link={item.link}
							title={item.title}
							description={item.description}
							index={index}
							basic={index > 2}
							extLink={item.extLink}
						/>
					</div>
				))}
			</div>
			{children}
		</Section>
	)
}
