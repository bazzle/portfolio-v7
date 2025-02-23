import propTypes from "prop-types";
import styles from "./style.module.scss";
import StylisedLine from "@/app/components/components/stylised-line";
function SectionHead({
    titleString = 'Section title',
    separator = false,
	noLineMobile
}){
	const headingClassString = `${separator ? styles.title : styles.title__no_separator}`
    return (
        <div className={styles.section_head}>
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