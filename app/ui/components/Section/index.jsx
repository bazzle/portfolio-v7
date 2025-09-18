import SectionHead from '@/app/ui/components/SectionHead';
import styles from "./Section.module.scss";

function Section({
	children,
	moduleClassname = "module",
	heading,
	headingTop,
	layout = "normal",
	line,
	lineTop,
	noSpacing,
	noMinHeight,
	headingHidden,
	id,
	deepMb,
	deepMbLine,
	hideFromNav
}) {

	const sectionClasses = [
		styles.section,
		line && styles["section____line"],
		noSpacing && styles["section____no-spacing"],
		noMinHeight && styles["section_____no-min-height"],
		headingHidden && styles["section____hidden-heading"],
		deepMb && styles["section____deep-mb"],
		deepMbLine && styles["section____deep-mb-line"],
		lineTop && 'section____line-top',
		hideFromNav && 'hide-from-nav'
	].filter(Boolean).join(' ');

	const topHeadingOutput = (str) => {
		return (
			<h2 className={styles["section__heading-top"]}>{str}</h2>
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
		} else if (layout === 'extended') {
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

	const sectionId = ()=>{
		let str
		if (id){
			str = id
		} else if (heading) {
			str = heading.toLowerCase().trim().replace(/[\s\W-]+/g, '-').replace(/^-+|-+$/g, '');
		}
		return str
	}

	const computedId = sectionId();
	const optionalProps = computedId ? { id: computedId } : {};
	
	return (
		<section
		className={sectionClasses}
		{...optionalProps}
		>
			<div className={moduleClassname}>
				{headingTop && topHeadingOutput(heading) }
				{mainSectionOutput(layout)}
			</div>
		</section>
  	);
}

export default Section;
