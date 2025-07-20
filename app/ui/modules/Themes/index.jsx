
import SectionHead from '@/app/ui/components/SectionHead';
import Tile from "./Tile";
import Section2 from '@/app/ui/components/Section2';
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

		<Section2 heading={ThemesContent.title} moduleClassname="themes" layout="fullWidth" headingTop noLine shallow>
			<div className="tileContainer">
				<div className="tileGrid">
					{tiles()}
				</div>
			</div>
		</Section2>
	)
}

export default Themes