'use client';
import Image from 'next/image';
import Section from '@/app/ui/components/Section';
import {CardGridContent} from '@/app/content/BodyContent';
import { motion } from "motion/react";
const MotionImage = motion(Image);

function Cards(){

	const items = [
		{
			imageSrc : "images/cards/whois.webp",
			imageAlt : "Figure with a question-mark for a head",
			title : "Bitcoin Truthbombs",
			description : "2 minute read articles about Bitcoin I write as I learn about the technology and economics.",
			link : "https://thoughts2.netlify.app/week-ending-27th-july"
		},
		{
			imageSrc : "images/cards/sat-power2.webp",
			imageAlt : "Sat logo",
			title : "Satoshi Power",
			description : "Fun project looking at how the price of a satoshi compares to the smallest units of different fiat currencies. Pulling data from blockchain.com",
			link : "https://thoughts2.netlify.app/week-ending-27th-july"
		},
		{
			imageSrc : "images/cards/exponential.png",
			imageAlt : "Exponential curve depiction",
			title : "My relationship with AI",
			description : "I've been cautious about AI, I've had a strong desire to embrace it to improve my productivity and help my learning but formed some boundaries.",
			link : "https://thoughts2.netlify.app/my-relationship-with-ai"
		}
	]

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
					delay: .3,
					type: "spring",
					stiffness: 200,
					damping: 30
				}}/>
				<div className="card__content">
					<h2 id={`card-title-${index}`} className="card__header">
						<a href={item.link} target='_blank'>{item.title}</a>
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