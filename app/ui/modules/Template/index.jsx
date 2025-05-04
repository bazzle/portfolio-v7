import SectionHead from '@/app/ui/components/SectionHead';
import Section from '@/app/ui/components/Section';

function Template(){
	return(
		<Section id="template">
			<div className="Template">
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={title} separator/>
						</div>
						<div className="col-2">
							<p>Content here</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Template