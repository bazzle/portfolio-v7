import styles from "./style.module.scss";
import SectionHead from "../../components/section-head";
import Tile from "./tile";
import Section from '@/app/components/components/section';
import { themesContent } from "@/app/content/body-content";

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

		<Section noLine shallow>
			<div className={styles.themes}>	
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={themesContent.title} separator />
						</div>
						<div className="col-2">
							<div className={styles.tile_container}>
								<div className={styles.tile_grid}>
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