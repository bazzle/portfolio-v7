import propTypes from "prop-types";

import StylisedLine from "@/app/components/components/StylisedLine/StylisedLine";
function SectionHead({
    titleString = 'Section title',
    separator = false,
	noLineMobile
}){
	const headingClassString = `${separator ? "sectionHead__title" : "sectionHead__title____no_separator"}`
    return (
        <div className={"sectionHead"}>
			<StylisedLine />
            <h2 className={headingClassString}>
				{titleString}
			</h2>
        </div>
    )
}

SectionHead.propTypes = {
    titleString : propTypes.string,
    separator : propTypes.bool,
	noLineMobile : propTypes.bool
}

export default SectionHead;