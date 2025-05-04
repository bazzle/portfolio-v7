import SectionHead from '@/app/ui/components/SectionHead';

function Section2({
	children,
	moduleClassname = "module",
	heading,
	headingTop,
	layout = "normal",
	line,
	noSpacing,
	noMinHeight
}) {

	const styleConfigString = [
		line && "section____line",
		noSpacing && "section____no-spacing",
		noMinHeight && "section____no-min-height"
	].filter(Boolean).join(' ');

	const topHeadingOutput = (str) => {
		return (
			<h3 className="section__heading-top">{str}</h3>
		)
	}

	const mainSectionOutput = (layout) => {
		if(layout === '2col'){
			return(
				<div className="container">
					<div className="inner-2col">
						<div className="col-1">
							<SectionHead titleString={heading} separator />
						</div>
						<div className="col-2">
							{children}
						</div>
					</div>
				</div>
			)
		} else if (layout === 'fullWidth') {
			return(
				<div className="container____extended">
					{children}
				</div>
			)
		} else {
			return(
				<div className="container">
					{children}
				</div>
			)
		}
	}

	const sectionId = (str)=>{
		return str.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
	}
	
	return (
		<section id={sectionId(heading)} className={`section ${styleConfigString}`}>
			<div className={moduleClassname}>
				{headingTop && topHeadingOutput(heading) }
				{mainSectionOutput(layout)}
			</div>
		</section>
  	);
}

export default Section2;
