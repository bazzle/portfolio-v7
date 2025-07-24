import Section2 from '@/app/ui/components/Section2';
import {TextBlocks} from '@/app/content/BodyContent';
import propTypes from "prop-types";

function TextBlock({itemIndex}){
	return(
		<Section2 id="text-block" moduleClassname="textBlock" layout="fullWidth" line deepMb>
			<blockquote className="textBlock__blockquote">
				<p className="textBlock__blockquote__text" dangerouslySetInnerHTML={{ __html: TextBlocks[itemIndex] }} />
			</blockquote>
		</Section2>
	)

}

TextBlock.propTypes = {
	itemIndex: propTypes.number
}

export default TextBlock;