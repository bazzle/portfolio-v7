import SectionHead from '@/app/ui/components/SectionHead';

function Section2({
	children,
	moduleClassname = "module",
	heading,
	headingTop,
	layout = "normal",
	line,
	noSpacing,
	noMinHeight,
	headingHidden,
	id,
	deepMb
}) {

	const styleConfigString = [
		line && "section____line",
		noSpacing && "section____no-spacing",
		noMinHeight && "section____no-min-height",
		headingHidden && "section____hidden-heading",
		deepMb && "section____deep-mb"
	].filter(Boolean).join(' ');

	const topHeadingOutput = (str) => {
		return (
			<h2 className="section__heading-top">{str}</h2>
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
		} else if (layout === 'toEdges') {
			return(
				<div className="container____toEdges">
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

	const sectionId = ()=>{
		let str
		if (id){
			str = id
		} else if (heading) {
			str = heading.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
		}
		return str
	}
	
	return (
		<section id={sectionId()} className={`section ${styleConfigString}`}>
			<div className={moduleClassname}>
				{headingTop && topHeadingOutput(heading) }
				{mainSectionOutput(layout)}
			</div>
		</section>
  	);
}

export default Section2;
