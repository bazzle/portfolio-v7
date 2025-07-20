import Section from '@/app/ui/components/Section';
import {TextBlocks} from '@/app/content/BodyContent';
import propTypes from "prop-types";

function TextBlock({itemIndex}){
	return(
		<Section id="text-block">
			<div className="textBlock">
				<div className="textBlock__inner">
					<div className="container">
						<blockquote className="textBlock__blockquote">
							<p className="textBlock__blockquote__text" dangerouslySetInnerHTML={{ __html: TextBlocks[itemIndex] }} />
						</blockquote>
					</div>
				</div>
			</div>
		</Section>
	)

}

TextBlock.propTypes = {
	itemIndex: propTypes.number
}

export default TextBlock;