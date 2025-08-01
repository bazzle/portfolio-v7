import Tile from "./Tile";
import Section from '@/app/ui/components/Section';
import { ThemesContent } from "@/app/content/BodyContent";

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

		<section heading={ThemesContent.title} moduleClassname="themes" layout="fullWidth" headingTop headingHidden noLine>
			<div className="tileContainer">
				<div className="tileGrid">
					{tiles()}
				</div>
			</div>
		</section>
	)
}

export default Themes