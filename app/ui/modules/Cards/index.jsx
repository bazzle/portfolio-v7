import Image from 'next/image';
import Section from '@/app/ui/components/Section';
import {CardGridContent} from '@/app/content/BodyContent';

function Cards(){

	const items = {
		'bitcoin_truthbombs' : {
			imageSrc : "images/cards/whois.webp",
			imageAlt : "Figure with a question-mark for a head",
			title : "Bitcoin Truthbombs",
			description : "Bitcoin Truthbombs description here",
			link : "https://thoughts2.netlify.app/week-ending-27th-july"
		},
		'satoshi_power' : {
			imageSrc : "images/cards/sat-power.webp",
			imageAlt : "Sat logo",
			title : "Satoshi Power",
			description : "Satoshi power description here",
			link : "https://thoughts2.netlify.app/week-ending-27th-july"
		}
	}

	function CardGrid(){
		return Object.values(items).map((item, index) => (
			<div className="cards__grid__card card" key={index}>
				<Image className='card__image' src={item.imageSrc} alt={item.imageAlt} width="540" height="360"/>
				<div className="card__content">
					<h2 id={`card-title-${index}`} className="card__header">
						<a href={item.link}>{item.title}</a>
					</h2>
					<p className='card__description'>{item.description}</p>
				</div>
			</div>
		));
	}

	
	return (
		<Section heading={CardGridContent.title} moduleClassname="cards" headingTop line deepMbLine>
			<div className="cards__grid">
				<CardGrid/>
			</div>
		</Section>
	)
}

export default Cards;