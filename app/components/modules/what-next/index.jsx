import SectionHead from '@/app/components/components/section-head';
import Section from '@/app/components/components/section';
import {WhatNextContent} from '@/app/content/body-content';


function WhatNext(){

	const title = WhatNextContent.title;
	const content = WhatNextContent.bodyContent()

	return(
		<Section noMinHeight>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString={title} separator />
					</div>
					<div className="col-2">
						{content}
					</div>
				</div>
			</div>
		</Section>
	)
}

export default WhatNext;