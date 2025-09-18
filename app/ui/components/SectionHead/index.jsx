import propTypes from "prop-types";

import StylisedLine from "@/app/ui/components/StylisedLine";
import styles from "./SectionHead.module.scss";

function SectionHead({
    titleString = 'Section title',
    separator = false,
	noLineMobile
}){
	const headingClasses = [
		separator ? styles["sectionHead__title"] : styles["sectionHead__title____no_separator"],
		noLineMobile && styles["sectionHead__title____no_indent_mobile"]
	].filter(Boolean).join(' ');

    return (
        <div className={`${styles.sectionHead} sectionHead`}>
			<StylisedLine />
            <h2 className={headingClasses}>
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
