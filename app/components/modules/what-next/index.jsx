import styles from './style.module.scss';
import SectionHead from '@/app/components/components/section-head';
import Section from '@/app/components/components/section';
import {WhatNextContent} from '@/app/content/body-content';


function WhatNext(){

	const title = WhatNextContent.title;
	const content = WhatNextContent.bodyContent()

	return(
		<Section line>
			<div className="container">
				<div className="inner-2col">
					<div className="col-1">
						<SectionHead titleString={title} separator />
					</div>
					<div className="col-2">
						<div className={styles.body_text}>
							{content}
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default WhatNext;