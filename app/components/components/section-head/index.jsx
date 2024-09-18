import propTypes from "prop-types";

function SectionHead({
    titleString = 'Section title',
    separator = false
}){
    const classNameString = `section-head ${separator && 'section-head--separator'}`;
    return (
        <div className={classNameString}>
            <h2 className="section-head__title text-section-title">{titleString}</h2>
        </div>
    )
}

SectionHead.propTypes = {
    titleString : propTypes.string,
    separator : propTypes.bool
}

export default SectionHead;