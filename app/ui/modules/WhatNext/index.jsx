import Section from '@/app/ui/components/Section';
import {WhatNextContent} from '@/app/content/BodyContent';


function WhatNext(){

	const title = WhatNextContent.title;
	const content = WhatNextContent.bodyContent()

	return(
		<Section heading={title} id="welcome" layout="2col" moduleClassname="textBlock" noMinHeight deepMb>
			{content}
		</Section>
	)
}

export default WhatNext;