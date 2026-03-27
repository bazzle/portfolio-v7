'use client'
import { Carousel } from '@ark-ui/react/carousel'
import Icons from '@/app/ui/misc/Icons'
import styles from './ThemesCarousel.module.scss'
import { ThemesContent } from '@/app/content/BodyContent'
import CarouselItem from './CarouselItem'
import { useState } from 'react'
import ProgressIndicator from './ProgressIndicator.jsx'

export default function ThemesCarousel() {
	const { themesItems } = ThemesContent
	const totalItems = themesItems.length
	const [currentPage, setCurrentPage] = useState(1)
	return (
		<Carousel.Root className={styles.Root} slideCount={themesItems.length} onPageChange={(details) => setCurrentPage(details.page + 1)}>
			<Carousel.Control className={styles.Control}>
				<Carousel.ItemGroup className={styles.ItemGroup}>
					{themesItems.map((item, index) => (
						<Carousel.Item className={styles.Item} key={index} index={index}>
							<CarouselItem itemObj={item} />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
			</Carousel.Control>

			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
					</div>
					<div className="col-2">
						<div className={styles.ControlsContainer}>
							<Carousel.PrevTrigger className={styles.Trigger}>
								{Icons.arrowLeft}
							</Carousel.PrevTrigger>
							<ProgressIndicator totalItems={totalItems} currentItemIndex={currentPage} />
							<Carousel.NextTrigger className={styles.Trigger}>
								{Icons.arrowRight}
							</Carousel.NextTrigger>
						</div>
					</div>
				</div>
			</div>

		</Carousel.Root>
	)
}
