import Section2 from '@/app/ui/components/Section2';
import {TextStandouts} from '@/app/content/BodyContent';

function TextBlock({itemIndex}){
	return(
		<Section2 id="text-block" moduleClassname="textBlock" layout="fullWidth" line deepMb deepMbLine>
			<blockquote className="textBlock__blockquote">
				<p className="textBlock__blockquote__text" dangerouslySetInnerHTML={{ __html: TextStandouts[itemIndex] }} />
			</blockquote>
		</Section2>
	)
}

export default TextBlock;