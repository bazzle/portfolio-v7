'use client';
import styles from "./CardGrid.module.scss";
import Section from '@/app/ui/components/Section';
import Card from '@/app/ui/components/Card';

export default function CardGrid({line, deepMb, deepMbLine, id, title, cards}){

	if (!cards) return

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
		...(id ? { id } : {})
	}
	
	return (
		<Section
			heading={title}
			headingTop {...optionalProps}
			layout="extended" 
		>
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
				)) }
			</div>
		</Section>
	)
}
