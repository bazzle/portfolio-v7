import Tile from "./Tile";
import Section from '@/app/ui/components/Section';
import { ThemesContent } from "@/app/content/BodyContent";
import styles from "./Themes.module.scss";

function Themes(){
	const tiles = () => {
		const tilesArr = ThemesContent.tiles;
		return tilesArr.map((item, index) => {
			return (
				<Tile
					key={index}
					component={item.component}
					nameFirstLine={item.nameFirstLine}
					nameSecondLine={item.nameSecondLine}
					description={item.description}
				/>
			)
		});
	}
	
	return(

		<Section heading={ThemesContent.title} moduleClassname={styles.themes} layout="fullWidth" headingTop headingHidden noLine>
			<div className={styles.tileContainer}>
				<div className={styles.tileGrid}>
					{tiles()}
				</div>
			</div>
		</Section>
	)
}

export default Themes
