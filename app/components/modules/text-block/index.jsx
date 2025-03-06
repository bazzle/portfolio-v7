import BgShapes from "../../components/bg-shapes";
import styles from "./style.module.scss";
import Section from '@/app/components/components/section';
import {TextBlocks} from '@/app/content/body-content';
import propTypes from "prop-types";

function TextBlock({itemIndex}){
	console.log(itemIndex);
	return(
		<Section id="text-block">
			<div className={styles.text_block}>
				<div className={styles.text_block__inner}>
					<div className="container">
						<blockquote className={styles.text_block__blockquote}>
							<p dangerouslySetInnerHTML={{ __html: TextBlocks[itemIndex] }} />
						</blockquote>
					</div>
				</div>
				<BgShapes variant="2" />
			</div>
		</Section>
	)

}

TextBlock.propTypes = {
	itemIndex: propTypes.number
}

export default TextBlock;