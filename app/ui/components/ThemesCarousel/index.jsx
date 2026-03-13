import { Carousel } from '@ark-ui/react/carousel'
import {Icons} from "@/app/ui/misc/Icons";
import styles from './ThemesCarousel.module.scss'
import { ThemesContent } from '@/app/content/BodyContent'
import CarouselItem from './CarouselItem';

const {themesItems} = ThemesContent;

export default function ThemesCarousel(){
	return (
		<Carousel.Root className={styles.Root} slideCount={themesItems.length}>
			<div className={styles.ControlsContainer}>
				<Carousel.PrevTrigger className={styles.Trigger}>
					{Icons.arrow}
				</Carousel.PrevTrigger>
				<div>
					<Carousel.IndicatorGroup className={styles.IndicatorGroup}>
						{themesItems.map((_, index) => (
							<Carousel.Indicator className={styles.Indicator} key={index} index={index} />
						))}
					</Carousel.IndicatorGroup>
				</div>
				<Carousel.NextTrigger className={styles.Trigger}>
					{Icons.arrow}
				</Carousel.NextTrigger>
			</div>
			<Carousel.Control className={styles.Control}>
				<Carousel.ItemGroup className={styles.ItemGroup}>
					{themesItems.map((item, index) => (
						<Carousel.Item className={styles.Item} key={index} index={index}>
							<CarouselItem itemObj={item} />
						</Carousel.Item>
					))}
				</Carousel.ItemGroup>
			</Carousel.Control>
		</Carousel.Root>
  	)
}
