import styles from "./style.module.scss";
import SectionHead from "../../components/section-head";
import Tile from "./tile";
import IconGlass from "./icons/icon-glass.jsx";
import IconDoor from "./icons/icon-door.jsx";
import IconMagGlass from "./icons/icon-mag-glass.jsx";
import IconPieces from "./icons/icon-pieces.jsx";
import IconShapes from "./icons/icon-shapes.jsx";
import IconTag from "./icons/icon-tag.jsx";

function Themes(){
	return(
		<section className={styles.themes}>
			
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.col_1}>
						<SectionHead titleString="Things I think about" separator />
					</div>
					<div className={styles.col_2}>
						<div className={styles.tile_grid}>
							<Tile component={<IconGlass/>} name="Responsive web" />
							<Tile component={<IconDoor/>} name="Accessibility" />
							<Tile component={<IconTag/>} name="Semantics" />
							<Tile component={<IconPieces/>} name="Typography" />
							<Tile component={<IconMagGlass/>} name="User centred design" />
							<Tile component={<IconShapes/>} name="Brand integration" />
							<Tile name="Integrating AI in my workflow" />
							<Tile name="Search Engine Optimisation" />
							<Tile name="Hierarchy, balance, white-space" />
							<Tile name="Content management" />
							<Tile name="Layout/Grid" />
							<Tile name="Web conventions" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Themes