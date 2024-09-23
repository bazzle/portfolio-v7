import propTypes from "prop-types";
import styles from "./style.module.scss";
function SectionHead({
    titleString = 'Section title',
    separator = false
}){
	const separatorElem = () => {
		return (
			<div className={styles.separator}>
				<svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path d="M12.0208 24.0416L0 12.0208L12.0208 0L24.0416 12.0208L12.0208 24.0416Z" /></svg>
			</div>
		)
	}
    return (
        <div className={styles.section_head}>
			{separator && separatorElem()}
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