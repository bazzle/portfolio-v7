
import SectionHead from '@/app/components/components/SectionHead/SectionHead';
import Tile from "./Tile";
import Section from '@/app/components/components/Section/Section';
import { themesContent } from "@/app/content/bodyContent";

function Themes(){
	const tiles = () => {
		const tilesArr = themesContent.tiles;
		return tilesArr.map((item, index) => {
			return <Tile
				key={index}
				component={item.component}
				name={item.name}
				description={item.description}
			/>
		});
	}
	
	return(

		<Section id="things-i-think-about" noLine shallow>
			<div className="themes">
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={themesContent.title} separator />
						</div>
						<div className="col-2">
							<div className="tileContainer">
								<div className="tileGrid">
									{tiles()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Themes