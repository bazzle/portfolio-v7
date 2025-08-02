'use client';
import Image from 'next/image';
import Section from '@/app/ui/components/Section';
import {CardGridContent} from '@/app/content/BodyContent';
import { motion } from "motion/react";
const MotionImage = motion(Image);

function Cards(){

	const items = CardGridContent.gridItems;

	function CardGrid(){
		return items.map((item, index) => (
			<div className="cards__grid__card card" key={index}>
				<MotionImage
				className='card__image'
				src={item.imageSrc}
				alt={item.imageAlt}
				width="540"
				height="360"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
				transition={{
					duration: .01,
					delay: .5 + (index * 0.1),
					type: "spring",
					stiffness: 200,
					damping: 30
				}}/>
				<div className="card__content">
					<h2 id={`card-title-${index}`} className="card__header">
						<a href={item.link} target='_blank'>{item.title}</a>
						<svg className="extLink" width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M36 26V38C36 39.0609 35.5786 40.0783 34.8284 40.8284C34.0783 41.5786 33.0609 42 32 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V16C6 14.9391 6.42143 13.9217 7.17157 13.1716C7.92172 12.4214 8.93913 12 10 12H22M30 6H42M42 6V18M42 6L20 28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className='stroke-accent'/>
						</svg>
					</h2>
					<p className='card__description'>{item.description}</p>
				</div>
			</div>
		));
	}

	
	return (
		<Section heading={CardGridContent.title} moduleClassname="cards" headingTop line deepMbLine layout="extended">
			<div className="cards__grid">
				<CardGrid/>
			</div>
		</Section>
	)
}

export default Cards;