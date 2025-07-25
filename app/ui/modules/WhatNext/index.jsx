import Section2 from '@/app/ui/components/Section2';
import {WhatNextContent} from '@/app/content/BodyContent';


function WhatNext(){

	const title = WhatNextContent.title;
	const content = WhatNextContent.bodyContent()

	return(
		<Section2 heading={title} id="welcome" layout="2col" moduleClassname="textBlock" noMinHeight deepMb>
			{content}
		</Section2>
	)
}

export default WhatNext;