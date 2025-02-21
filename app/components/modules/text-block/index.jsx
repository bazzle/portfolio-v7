import BgShapes from "../../components/bg-shapes";
import styles from "./style.module.scss";
import Section from '@/app/components/components/section';
import {TextBlocks} from '@/app/content/body-content';
import Spacer from "@/app/components/components/spacer";

function TextBlock(props){

	return(
		<Section noLine shallow>
			<div className={styles.text_block}>
				<div className={styles.text_block__inner}>
					<div className="container">
						<blockquote className={styles.text_block__blockquote}>
							<p>{TextBlocks[props.index]}</p>
						</blockquote>
					</div>
				</div>
				<BgShapes variant="2" />
			</div>
		</Section>
	)

}

export default TextBlock;