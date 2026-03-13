'use client'

import { Carousel } from '@ark-ui/react/carousel'
import {Icons} from "@/app/ui/misc/Icons";
import styles from './ThemesCarousel.module.scss'
import { ThemesContent } from '@/app/content/BodyContent'
import CarouselItem from './CarouselItem';

export default function ThemesCarousel(){
	const {themesItems} = ThemesContent;
	return (
		<Carousel.Root
			className={styles.Root} 
			slideCount={themesItems.length}
		>
			<Carousel.Control className={styles.Control}>
				<Carousel.ItemGroup className={styles.ItemGroup}>
					{themesItems.map((item, index) => (
						<Carousel.Item className={styles.Item} key={index} index={index}>
							<CarouselItem itemObj={item} />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
			</Carousel.Control>
			<div className={styles.ControlsContainer}>
				<Carousel.PrevTrigger className={styles.Trigger}>
					{Icons.arrowLeft}
				</Carousel.PrevTrigger>
				<Carousel.NextTrigger className={styles.Trigger}>
					{Icons.arrowRight}
				</Carousel.NextTrigger>
			</div>
		</Carousel.Root>
  	)
}
