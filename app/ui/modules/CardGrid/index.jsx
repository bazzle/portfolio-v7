'use client';
import styles from "./CardGrid.module.scss";
import Section from '@/app/ui/components/Section';
import {CardGridContent} from '@/app/content/BodyContent';
import Card from '@/app/ui/components/Card';

export default function CardGrid({line, deepMb, deepMbLine, id, addToNav}){

	const items = CardGridContent.gridItems;

	const optionalProps = {
		...(line ? { line } : {}),
		...(deepMb ? { deepMb } : {}),
		...(deepMbLine ? { deepMbLine } : {}),
		...(id ? { id } : {}),
		...(addToNav ? { addToNav } : {})
	}
	
	return (
		<Section
			heading={CardGridContent.title}
			headingTop {...optionalProps}
			layout="extended" 
		>
			<div className={styles.cardGrid}>
				{items.map((item, index) => (
					
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
