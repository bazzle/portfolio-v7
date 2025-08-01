import Section from '@/app/ui/components/Section';
import {TextStandouts} from '@/app/content/BodyContent';

function TextBlock({itemIndex}){
	return(
		<Section id="text-block" moduleClassname="textBlock" layout="fullWidth" line deepMb deepMbLine>
			<blockquote className="textBlock__blockquote">
				<p className="textBlock__blockquote__text" dangerouslySetInnerHTML={{ __html: TextStandouts[itemIndex] }} />
			</blockquote>
		</Section>
	)
}

export default TextBlock;