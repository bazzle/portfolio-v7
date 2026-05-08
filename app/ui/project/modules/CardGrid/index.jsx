'use client'
import dynamic from 'next/dynamic'
import styles from './CardGrid.module.scss'
import Section from '@/app/ui/project/components/Section'
import Card from '@/style-library/components/Card'

const ResponsiveMasonry = dynamic(
	() => import('react-responsive-masonry').then((m) => m.ResponsiveMasonry),
	{ ssr: false },
)
const Masonry = dynamic(() => import('react-responsive-masonry'), { ssr: false })

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
				<ResponsiveMasonry columnsCountBreakPoints={{ 359: 1, 641: 2, 880: 3 }} gutterBreakPoints={{ 359: 'clamp(0.5rem, 2.5vw, 5rem)' }}>
					<Masonry gutter="20px">
						{cards.map((item, index) => (
							<div className={styles.cardGrid__item} key={index}>
								<Card
									key={index}
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
					</Masonry>
				</ResponsiveMasonry>
			</div>
			{children}
		</Section>
	)
}
