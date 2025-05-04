import BgShapes from '@/app/ui/components/BgShapes';
import Section from '@/app/ui/components/Section';
import {TextBlocks} from '@/app/content/BodyContent';
import propTypes from "prop-types";

function TextBlock({itemIndex}){
	console.log(itemIndex);
	return(
		<Section id="text-block">
			<div className="textBlock">
				<div className="textBlock__inner">
					<div className="container">
						<blockquote className="textBlock__blockquote">
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