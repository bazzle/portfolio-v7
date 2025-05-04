
import SectionHead from '@/app/ui/components/SectionHead';
import Tile from "./Tile";
import Section from '@/app/ui/components/Section';
import { ThemesContent } from "@/app/content/BodyContent";

function Themes(){
	const tiles = () => {
		const tilesArr = ThemesContent.tiles;
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
							<SectionHead titleString={ThemesContent.title} separator />
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