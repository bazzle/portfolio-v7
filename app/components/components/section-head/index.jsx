import propTypes from "prop-types";
import styles from "./style.module.scss";
import StylisedLine from "@/app/components/components/stylised-line";
function SectionHead({
    titleString = 'Section title',
    separator = false
}){
    return (
        <div className={styles.section_head}>
			<StylisedLine/>
            <h2 className={separator ? styles.title : styles.title__no_separator}>
				{titleString}
			</h2>
        </div>
    )
}

SectionHead.propTypes = {
    titleString : propTypes.string,
    separator : propTypes.bool
}

export default SectionHead;